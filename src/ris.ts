import { encoder } from "./codec.ts";

/**
 * Full Reset (RIS)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Controls-beginning-with-ESC:ESC-c.C91}
 */
export const ris: Uint8Array = encoder.encode("\x1bc");
