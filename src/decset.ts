import type { DECPrivateMode } from "./decpm.ts";
import { encoder } from "./encoder.ts";

/**
 * DEC Private Mode Set (DECSET)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-?-Pm-h.1D0E}
 */
export function decset(mode: DECPrivateMode): Uint8Array {
  return encoder.encode(`\x1B[?${mode}h`);
}
