import { encoder } from "./encoder.ts";

/**
 * Cursor Up (CUU)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-A.1C81}
 */
export const cuu1: Uint8Array = encoder.encode("\x1b[A");

/**
 * Cursor Up (CUU)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-A.1C81}
 */
export function cuu(n: number): Uint8Array {
  return encoder.encode(`\x1b[${n}A`);
}

/**
 * Cursor Down (CUD)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-B.1C82}
 */
export const cud1: Uint8Array = encoder.encode("\x1b[B");

/**
 * Cursor Down (CUD)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-B.1C82}
 */
export function cud(n: number): Uint8Array {
  return encoder.encode(`\x1b[${n}B`);
}

/**
 * Cursor Forward (CUF)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-C.1C83}
 */
export const cuf1: Uint8Array = encoder.encode("\x1b[C");

/**
 * Cursor Forward (CUF)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-C.1C83}
 */
export function cuf(n: number): Uint8Array {
  return encoder.encode(`\x1b[${n}C`);
}

/**
 * Cursor Backward (CUB)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-D.1C84}
 */
export const cub1: Uint8Array = encoder.encode("\x1b[D");

/**
 * Cursor Backward (CUB)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-D.1C84}
 */
export function cub(n: number): Uint8Array {
  return encoder.encode(`\x1b[${n}D`);
}

/**
 * Cursor Position (CUP)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps;Ps-H.1D86}
 */
export function cup(row: number, col: number): Uint8Array {
  return encoder.encode(`\x1b[${row};${col}H`);
}
