import { decoder, encoder } from "./codec.ts";
import { CSI } from "./c1.ts";

/**
 * Cursor Up (CUU)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-A.1C81}
 */
export const cuu1: Uint8Array = encoder.encode(CSI + "A");

/**
 * Cursor Up (CUU)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-A.1C81}
 */
export function cuu(n: number): Uint8Array {
  return encoder.encode(CSI + `${n}A`);
}

/**
 * Cursor Down (CUD)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-B.1C82}
 */
export const cud1: Uint8Array = encoder.encode(CSI + "B");

/**
 * Cursor Down (CUD)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-B.1C82}
 */
export function cud(n: number): Uint8Array {
  return encoder.encode(CSI + `${n}B`);
}

/**
 * Cursor Forward (CUF)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-C.1C83}
 */
export const cuf1: Uint8Array = encoder.encode(CSI + "C");

/**
 * Cursor Forward (CUF)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-C.1C83}
 */
export function cuf(n: number): Uint8Array {
  return encoder.encode(CSI + `${n}C`);
}

/**
 * Cursor Backward (CUB)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-D.1C84}
 */
export const cub1: Uint8Array = encoder.encode(CSI + "D");

/**
 * Cursor Backward (CUB)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-D.1C84}
 */
export function cub(n: number): Uint8Array {
  return encoder.encode(CSI + `${n}D`);
}

/**
 * Cursor Position (CUP)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps;Ps-H.1D86}
 */
export function cup(ln: number, col: number): Uint8Array {
  return encoder.encode(CSI + `${ln};${col}H`);
}

/**
 * Report Cursor Position (CPR) request
 *
 * @see {@link https://www.invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-n:Ps-=-6.1E06}
 */
export const cpr_req = encoder.encode(CSI + "6n");

// deno-lint-ignore no-control-regex
const CPR_RES_RE = /\x1b\[(\d+);(\d+)R/;

/**
 * Parse Report Cursor Position (CPR) response
 *
 * @see {@link https://www.invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-n:Ps-=-6.1E06}
 */
export function parse_cpr_res(bytes: Uint8Array): [number, number] | undefined {
  const match = decoder.decode(bytes).match(CPR_RES_RE);

  if (match) {
    return [Number.parseInt(match[1]!), Number.parseInt(match[2]!)];
  }
}
