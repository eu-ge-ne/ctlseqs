import { encoder } from "./encoder.ts";

/**
 * DEC Private Mode Set (DECSET)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-?-Pm-h.1D0E}
 */
export function decset(mode: DECSetMode): Uint8Array {
  return encoder.encode(`\x1B[?${mode}h`);
}

export const enum DECSetMode {
  /**
   * Save cursor as in DECSC, xterm. After saving the cursor, switch to the Alternate Screen Buffer, clearing it first. This may be disabled by the titeInhibit resource. This control combines the effects of the 1047 and 1048  modes. Use this with terminfo-based applications rather than the 47 mode.
   *
   * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-?-Pm-h:Ps-=-1-0-4-9.1F85}
   */
  P1049 = 1049,
}
