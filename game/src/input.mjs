export function createInput(canvas, callbacks = {}) {
  const abort = new AbortController();
  const listen = (target, name, fn, options = {}) => target?.addEventListener(name, fn, { ...options, signal: abort.signal });
  const keys = new Set();
  let menu = true, pointerClose = false, drag = null, dx = 0, dy = 0;
  let settings = {}, oldButtons = [], lastMenu = 0;
  const holdButton = document.getElementById('hold-close');
  const typing = target => target?.matches?.('input:not([type=range]):not([type=checkbox]),textarea');
  const binding = name => settings.bindings?.[name] ?? { close: 'Space', pause: 'Escape', recenter: 'Enter' }[name];

  function reset() { keys.clear(); pointerClose = false; drag = null; dx = 0; dy = 0; holdButton?.classList.remove('held'); }
  listen(window, 'keydown', event => {
    if (typing(event.target)) return;
    if (menu) {
      if (event.code === binding('pause')) { event.preventDefault(); callbacks.onPause?.(); }
      if (['ArrowUp','ArrowDown'].includes(event.code) && !event.target.matches?.('input[type=range],select')) {
        event.preventDefault(); callbacks.onMenuMove?.(event.code === 'ArrowDown' ? 1 : -1);
      }
      return;
    }
    if ([binding('close'),binding('pause'),binding('recenter'),'ArrowUp','ArrowDown','ArrowLeft','ArrowRight','KeyW','KeyA','KeyS','KeyD'].includes(event.code)) event.preventDefault();
    if (!event.repeat && event.code === binding('pause')) callbacks.onPause?.();
    if (!event.repeat && event.code === binding('recenter')) callbacks.onRecenter?.();
    keys.add(event.code);
  });
  listen(window, 'keyup', event => keys.delete(event.code));
  listen(window, 'blur', () => { reset(); callbacks.onBlur?.(); });
  listen(document, 'visibilitychange', () => { if (document.hidden) { reset(); callbacks.onBlur?.(); } });
  listen(holdButton, 'pointerdown', event => {
    if (menu || holdButton.disabled) return;
    event.preventDefault(); holdButton.setPointerCapture?.(event.pointerId); pointerClose = true; holdButton.classList.add('held');
  });
  const releaseClose = () => { pointerClose = false; holdButton?.classList.remove('held'); };
  listen(holdButton, 'pointerup', releaseClose); listen(holdButton, 'pointercancel', releaseClose); listen(holdButton, 'lostpointercapture', releaseClose);
  listen(canvas, 'pointerdown', event => { if (!menu) { drag = { id: event.pointerId, x: event.clientX, y: event.clientY }; canvas.setPointerCapture?.(event.pointerId); } });
  listen(canvas, 'pointermove', event => {
    if (!drag || drag.id !== event.pointerId || menu) return;
    dx += event.clientX - drag.x; dy += event.clientY - drag.y;
    drag.x = event.clientX; drag.y = event.clientY;
  });
  listen(canvas, 'pointerup', () => { drag = null; }); listen(canvas, 'pointercancel', () => { drag = null; });
  listen(canvas, 'contextmenu', event => event.preventDefault());

  function poll(nextSettings = {}) {
    settings = nextSettings;
    const pad = [...(navigator.getGamepads?.() ?? [])].find(Boolean);
    const buttons = pad?.buttons.map(b => b.pressed) ?? [];
    const edge = index => buttons[index] && !oldButtons[index];
    if (edge(9)) callbacks.onPause?.();
    if (menu) {
      if (edge(0) || edge(1)) callbacks.onConfirm?.();
      const direction = buttons[13] || (pad?.axes[1] ?? 0) > .6 ? 1 : buttons[12] || (pad?.axes[1] ?? 0) < -.6 ? -1 : 0;
      const now = performance.now();
      if (direction && now - lastMenu > 230) { callbacks.onMenuMove?.(direction); lastMenu = now; }
      const horizontal = buttons[15] ? 1 : buttons[14] ? -1 : 0;
      if (horizontal && now - lastMenu > 120 && document.activeElement?.matches('input[type=range]')) {
        const input = document.activeElement;
        input.value = String(Math.max(Number(input.min), Math.min(Number(input.max), Number(input.value) + horizontal * Number(input.step))));
        input.dispatchEvent(new Event('input', { bubbles: true })); lastMenu = now;
      }
    } else if (edge(1)) callbacks.onRecenter?.();
    oldButtons = buttons;
    const dead = Math.min(.5, Math.max(.05, settings.deadZone ?? .18));
    const axis = value => Math.abs(value ?? 0) <= dead ? 0 : Math.sign(value) * (Math.abs(value) - dead) / (1 - dead);
    const lookX = (keys.has('KeyD') || keys.has('ArrowRight') ? 1 : 0) - (keys.has('KeyA') || keys.has('ArrowLeft') ? 1 : 0) + axis(pad?.axes[0]) + dx * .07;
    const lookY = (keys.has('KeyS') || keys.has('ArrowDown') ? 1 : 0) - (keys.has('KeyW') || keys.has('ArrowUp') ? 1 : 0) + axis(pad?.axes[1]) + dy * .07;
    dx = 0; dy = 0;
    return { close: !menu && (keys.has(binding('close')) || pointerClose || Boolean(buttons[0])), lookX: menu ? 0 : Math.max(-3, Math.min(3, lookX)), lookY: menu ? 0 : Math.max(-3, Math.min(3, lookY)) };
  }
  return { poll, reset, setMenu(value) { if (menu !== value) reset(); menu = Boolean(value); }, dispose() { reset(); abort.abort(); } };
}
