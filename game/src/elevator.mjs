/** Deterministic door mechanics. Values are seconds and normalized openness. */
export const DOOR_TIMING = Object.freeze({ open: 0.8, close: 1.2, releaseDelay: 0.15 });

export class ElevatorDoors {
  constructor() { this.reset(); }
  reset() { this.openness = 0; this.releaseRemaining = 0; this.wasClosing = false; }
  timeToBoundary({ opening = false, close = false, sealed = false } = {}) {
    if (sealed) return Infinity;
    if (opening) return (1 - this.openness) * DOOR_TIMING.open;
    if (close && this.openness > 0) return this.openness * DOOR_TIMING.close;
    if (!close && this.wasClosing) return DOOR_TIMING.releaseDelay;
    if (this.releaseRemaining > 0) return this.releaseRemaining;
    return this.openness < 1 ? (1 - this.openness) * DOOR_TIMING.open : Infinity;
  }
  advance(dt, { opening = false, close = false, sealed = false } = {}) {
    if (sealed) { this.openness = 0; return; }
    if (opening) {
      this.openness = Math.min(1, this.openness + dt / DOOR_TIMING.open);
      return;
    }
    if (close) {
      this.releaseRemaining = 0;
      this.openness = Math.max(0, this.openness - dt / DOOR_TIMING.close);
    } else {
      if (this.wasClosing) this.releaseRemaining = DOOR_TIMING.releaseDelay;
      const remaining = Math.max(0, dt - this.releaseRemaining);
      this.releaseRemaining = Math.max(0, this.releaseRemaining - dt);
      this.openness = Math.min(1, this.openness + remaining / DOOR_TIMING.open);
    }
    this.wasClosing = close;
  }
  snapshot() { return { openness: this.openness, releaseRemaining: this.releaseRemaining }; }
}
