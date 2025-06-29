import { empty, encoder } from "./encoder.ts";

/**
 * DEC Private Mode Reset (DECRST)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-?-Pm-l.1D12}
 */
export function decrst(...modes: DECResetMode[]): Uint8Array {
  if (modes.length === 0) {
    return empty;
  }
  return encoder.encode(`\x1b[?${modes.join(";")}l`);
}

/**
 * DEC Private Mode
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-?-Pm-l.1D12}
 */
export const enum DECResetMode {
  /**
   * Hide cursor (DECTCEM), VT220.
   */
  DECTCEM = 25,

  /**
   * Use Normal Screen Buffer and restore cursor as in DECRC, xterm. This may be disabled by the titeInhibit resource. This combines the effects of the 1047  and 1048 modes. Use this with terminfo-based applications rather than the 47 mode.
   */
  ALTSCR = 1049,

  /**
   * End synchronized update
   *
   * @see {@link https://gist.github.com/christianparpart/d8a62cc1ab659194337d73e399004036}
   */
  ESU = 2026,
}
