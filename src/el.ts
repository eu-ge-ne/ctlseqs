import { encoder } from "./encoder.ts";

/**
 * Erase in Line (EL)
 *
 * Erase to Right
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-K.1C8B}
 */
export const el0: Uint8Array = encoder.encode("\x1b[K");

/**
 * Erase in Line (EL)
 *
 * Erase to Left
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-K.1C8B}
 */
export const el1: Uint8Array = encoder.encode("\x1b[1K");

/**
 * Erase in Line (EL)
 *
 * Erase All
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-K.1C8B}
 */
export const el2: Uint8Array = encoder.encode("\x1b[2K");
