import type { DECPrivateMode } from "./decpm.ts";
import { encoder } from "./encoder.ts";

/**
 * DEC Private Mode Reset (DECRST)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-?-Pm-l.1D12}
 */
export function decrst(mode: DECPrivateMode): Uint8Array {
  return encoder.encode(`\x1B[?${mode}l`);
}
