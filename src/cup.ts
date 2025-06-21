import { encoder } from "./encoder.ts";

/**
 * Cursor Position (CUP)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps;Ps-H.1D86}
 */
export function cup(row: number, col: number): Uint8Array {
  return encoder.encode(`\x1b[${row + 1};${col + 1}H`);
}
