import { encoder } from "./encoder.ts";

/**
 * Character Attributes (SGR)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Pm-m.1CA7}
 */
export function sgr(...attrs: (SGRAttr | SGRColor)[]): Uint8Array {
  const y = attrs.map((x) => {
    if (typeof x === "number") {
      return x;
    } else {
      const [c, r, g, b] = x;

      if (c === "fg") {
        return `38;2;${r};${g};${b}`;
      } else {
        return `48;2;${r};${g};${b}`;
      }
    }
  });
  return encoder.encode(`\x1b[${y.join(";")}m`);
}

export type SGRColor = ["fg" | "bg", number, number, number];

export const enum SGRAttr {
  Normal = 0,
  Bold = 1,
}
