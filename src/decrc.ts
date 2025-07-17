import { encoder } from "./codec.ts";

/**
 * Restore Cursor (DECRC)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Controls-beginning-with-ESC:ESC-8.C66}
 */
export const decrc: Uint8Array = encoder.encode("\x1b8");
