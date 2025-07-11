import { encoder } from "./encoder.ts";

/**
 * Manipulate Selection Data (OSC52)
 *
 * @see {@link https://www.invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Operating-System-Commands:OSC-Ps;Pt-ST:Ps-=-5-2.101B}
 */
export function osc52(text: string): Uint8Array {
  return encoder.encode(`\x1b]52;c;${btoa(text)}\x1b\\`);
}
