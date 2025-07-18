import { empty, encoder } from "./codec.ts";

/**
 * DEC Private Mode Set (DECSET)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-?-Pm-h.1D0E}
 */
export function decset(...modes: DECSetMode[]): Uint8Array {
  if (modes.length === 0) {
    return empty;
  }
  return encoder.encode(`\x1b[?${modes.join(";")}h`);
}

/**
 * DEC Private Mode
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-?-Pm-h.1D0E}
 */
export const enum DECSetMode {
  /**
   * Show cursor (DECTCEM), VT220.
   */
  DECTCEM = 25,

  /**
   * Save cursor as in DECSC, xterm. After saving the cursor, switch to the Alternate Screen Buffer, clearing it first. This may be disabled by the titeInhibit resource. This control combines the effects of the 1047 and 1048  modes. Use this with terminfo-based applications rather than the 47 mode.
   */
  ALTSCR = 1049,

  /**
   * Begin synchronized update
   *
   * @see {@link https://gist.github.com/christianparpart/d8a62cc1ab659194337d73e399004036}
   */
  BSU = 2026,
}
