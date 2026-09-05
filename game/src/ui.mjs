import { DEFAULT_SETTINGS } from './storage.mjs';

const keyLabel = code => code === 'Space' ? 'SPACE' : code.replace(/^Key|^Digit/, '').toUpperCase();
const safeNumber = value => Number.isFinite(value) ? value : 0;

export function createUI(actions = {}) {
  const controller = new AbortController();
  const listen = (el, type, fn) => el?.addEventListener(type, fn, { signal: controller.signal });
  const byId = id => document.getElementById(id);
  const screens = Object.fromEntries(['title', 'settings', 'pause', 'results'].map(name => [name, byId(`${name}-screen`)]));
  const form = byId('settings-form');
  let settings = { ...DEFAULT_SETTINGS, bindings: { ...DEFAULT_SETTINGS.bindings } };
  let screen = 'title';
  let settingsReturn = 'title';
  let binding = false;
  let lastCaption = '';
  let lastFloor = '';
  let lastMistakes = -1;

  function synchronize() {
    for (const input of form.querySelectorAll('input[name],select[name]')) {
      const value = settings[input.name];
      if (input.type === 'checkbox') input.checked = Boolean(value);
      else input.value = String(value);
      const output = form.querySelector(`[data-output="${input.name}"]`);
      if (output) output.value = /Volume$/.test(input.name) ? `${Math.round(value * 100)}%` : Number(value).toFixed(2);
    }
    byId('bind-close').textContent = binding ? 'PRESS A KEY…' : keyLabel(settings.bindings.close);
    byId('controls-hint').innerHTML = `WASD / ARROWS <b>LOOK</b><br>HOLD ${keyLabel(settings.bindings.close)} <b>CLOSE</b>`;
    document.body.classList.toggle('reduced-motion', settings.reducedMotion);
  }

  function caption(text = '') {
    const content = settings.captions ? String(text) : '';
    if (content === lastCaption) return;
    lastCaption = content;
    byId('caption').textContent = content;
  }

  function show(next, data = {}) {
    const normalized = next === 'game' || next === 'running' ? 'playing' : next;
    if (normalized === 'settings' && screen !== 'settings') settingsReturn = screen === 'playing' ? 'pause' : screen;
    screen = normalized;
    binding = false;
    for (const [name, node] of Object.entries(screens)) node.hidden = name !== screen;
    byId('hud').hidden = screen !== 'playing';
    document.body.dataset.screen = screen;
    if (screen === 'results') {
      const won = data.mode === 'won' || data.won || data.success;
      const practice = data.practice === true;
      byId('result-kicker').textContent = practice ? 'Practice complete' : won ? 'You made it out' : 'The descent is over';
      byId('result-title').innerHTML = won ? 'Ground<br><em>floor.</em>' : ['false-alarms', 'shutdown'].includes(data.failureReason) ? 'Service<br><em>ended.</em>' : 'It came<br><em>inside.</em>';
      byId('result-reason').textContent = data.reason || (won ? 'The lobby is empty. The front door is open. Do not look back.' : (data.failureReason?.includes('alarm') || data.failureReason === 'shutdown') ? 'Three normal floors were rejected. The elevator has shut down.' : 'The doors did not seal before the visitor reached you.');
      byId('result-clue').textContent = won ? '' : (data.clueText || data.round?.clueText || data.clue || 'Wait through normal floors. Hold Close when something is wrong.');
      const survived = data.floorsSurvived ?? (won ? data.totalRounds ?? 30 : Math.max(0, data.roundIndex ?? 0));
      byId('result-floors').textContent = `${survived} / ${data.totalRounds ?? 30}`;
      byId('result-score').textContent = Math.floor(safeNumber(data.score)).toLocaleString();
      byId('result-best').textContent = Math.floor(safeNumber(data.best ?? data.personalBest)).toLocaleString();
      byId('result-seed').textContent = `${data.assisted ? 'ASSISTED TIMING · ' : ''}${data.seed ? `DESCENT ${data.seed}` : ''}`;
    }
    synchronize();
    const focusTarget = screen === 'playing' ? byId('scene') : screens[screen]?.querySelector('button:not(:disabled),input');
    focusTarget?.focus({ preventScroll: true });
    actions.screenChanged?.(screen);
  }

  function invoke(action) {
    if (action === 'settings') return show('settings');
    if (action === 'back') return show(settingsReturn === 'settings' ? 'title' : settingsReturn);
    if (action === 'play' || action === 'practice') return actions[action]?.(byId('seed-input').value.trim());
    actions[action]?.();
  }

  for (const button of document.querySelectorAll('[data-action]')) listen(button, 'click', () => invoke(button.dataset.action));
  listen(byId('pause-button'), 'click', () => actions.pause?.());
  listen(form, 'submit', event => event.preventDefault());
  listen(form, 'input', event => {
    const input = event.target;
    if (!input.name) return;
    settings[input.name] = input.type === 'checkbox' ? input.checked : input.tagName === 'SELECT' ? input.value : Number(input.value);
    synchronize();
    if (!settings.captions) caption('');
    actions.settingsChanged?.(getSettings());
  });
  listen(byId('bind-close'), 'click', () => { binding = true; synchronize(); });
  // Capture before gameplay input so key binding cannot close a door or dismiss this screen.
  document.addEventListener('keydown', event => {
    if (!binding) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    if (event.code === 'Escape') { binding = false; synchronize(); return; }
    if (!/^(Space|Key[A-Z]|Digit[0-9])$/.test(event.code) || ['KeyW','KeyA','KeyS','KeyD',settings.bindings.pause,settings.bindings.recenter].includes(event.code)) {
      byId('bind-close').textContent = 'USE SPACE / OTHER LETTER';
      return;
    }
    settings.bindings.close = event.code;
    binding = false;
    synchronize();
    actions.settingsChanged?.(getSettings());
  }, { capture: true, signal: controller.signal });

  function update(snapshot = {}) {
    const total = snapshot.totalRounds ?? 30;
    const index = Math.max(0, snapshot.roundIndex ?? 0);
    const floor = snapshot.mode === 'won' ? 'L' : String(Math.max(1, total - index)).padStart(2, '0');
    if (lastFloor !== floor) {
      lastFloor = floor;
      byId('floor-number').textContent = floor;
      byId('round-count').textContent = `${snapshot.practice ? 'PRACTICE' : 'STOP'} ${String(index + 1).padStart(2, '0')} / ${total}`;
    }
    const mistakes = Math.max(0, Math.min(3, snapshot.mistakes ?? 0));
    if (lastMistakes !== mistakes) {
      lastMistakes = mistakes;
      [...byId('alarm-dots').children].forEach((dot, i) => dot.classList.toggle('used', i < mistakes));
      byId('alarm-text').textContent = `${mistakes} of 3 false alarms`;
      document.querySelector('.allowance').setAttribute('aria-label', `${3 - mistakes} false alarms remaining`);
    }
    byId('hold-close').classList.toggle('held', snapshot.phase === 'closing');
    byId('hold-close').disabled = snapshot.resolved || !['opening','observing','closing'].includes(snapshot.phase);
    if (snapshot.practice && screen === 'playing') caption(snapshot.round?.danger ? 'Something is wrong. Hold Close until the doors seal.' : 'This floor is normal. Wait and let the doors close by themselves.');
  }

  function getSettings() { return { ...settings, bindings: { ...settings.bindings } }; }
  function updateSettings(partial = {}) {
    settings = { ...settings, ...partial, bindings: { ...settings.bindings, ...(partial.bindings ?? {}) } };
    synchronize();
    return getSettings();
  }
  function menuMove(delta) {
    const activeScreen = screens[screen];
    if (!activeScreen || binding) return;
    const focusable = [...activeScreen.querySelectorAll('button:not(:disabled),input,select,summary')].filter(el => el.getClientRects().length);
    const index = focusable.indexOf(document.activeElement);
    focusable[(index + Math.sign(delta) + focusable.length) % focusable.length]?.focus();
  }
  function confirm() {
    if (screen === 'playing') return actions.recenter?.();
    if (binding) return;
    const active = document.activeElement;
    if (active?.matches('select')) { active.selectedIndex = (active.selectedIndex + 1) % active.options.length; active.dispatchEvent(new Event('input', { bubbles: true })); } else if (active?.matches('button,summary,input[type=checkbox]')) active.click();
  }
  function setReady(ready = true, text) {
    byId('play-button').disabled = !ready;
    document.querySelector('[data-action="practice"]').disabled = !ready;
    byId('load-status').textContent = text || (ready ? 'ELEVATOR READY' : 'PREPARING ELEVATOR');
  }
  synchronize();
  return { show, update, caption, setReady, getSettings, updateSettings, menuMove, confirm, getScreen: () => screen, dispose: () => controller.abort() };
}
