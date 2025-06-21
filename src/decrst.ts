import { encoder } from "./encoder.ts";

/**
 * DEC Private Mode Reset (DECRST)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-?-Pm-l.1D12}
 */
export function decrst(mode: DECResetMode): Uint8Array {
  return encoder.encode(`\x1B[?${mode}l`);
}

/**
 * DEC Private Mode
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-?-Pm-l.1D12}
 */
export const enum DECResetMode {
  /**
   * Restore cursor as in DECRC, xterm. This may be disabled by the titeInhibit resource.
   *
   * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-?-Pm-l:Ps-=-1-0-4-8.1F88}
   */
  P1048 = 1048,

  /**
   * Use Normal Screen Buffer and restore cursor as in DECRC, xterm. This may be disabled by the titeInhibit resource. This combines the effects of the 1047  and 1048 modes. Use this with terminfo-based applications rather than the 47 mode.
   *
   * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-?-Pm-l:Ps-=-1-0-4-9.1F89}
   */
  P1049 = 1049,
}
