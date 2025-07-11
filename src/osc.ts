import { encoder } from "./encoder.ts";

export function osc52(text: string): Uint8Array {
  return encoder.encode(`\x1b]52;c;${btoa(text)}\x1b\\`);
}
