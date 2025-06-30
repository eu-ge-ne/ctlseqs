import { encoder } from "./encoder.ts";

/**
 * Erase Character(s) (ECH)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-X.1C98}
 */
export function ech(n: number): Uint8Array {
  return encoder.encode(`\x1b[${n}X`);
}
