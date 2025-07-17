import { encoder } from "./codec.ts";

/**
 * Save Cursor (DECSC)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Controls-beginning-with-ESC:ESC-7.C65}
 */
export const decsc: Uint8Array = encoder.encode("\x1b7");
