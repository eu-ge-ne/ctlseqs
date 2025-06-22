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

/**
 * SGR RGB color
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Pm-m.1CA7}
 */
export type SGRColor = ["fg" | "bg", number, number, number];

/**
 * SGR Attributes
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Pm-m.1CA7}
 */
export const enum SGRAttr {
  Default = 0,
  Bold = 1,
  Faint = 2,
  Italicized = 3,
  Underlined = 4,
  Blink = 5,
  Inverse = 7,
  Invisible = 8,
  CrossedOut = 9,

  DoublyUnderlined = 21,
  Normal = 22,
  NotItalicized = 23,
  NotUnderlined = 24,
  Steady = 25,
  Positive = 27,
  Visible = 28,
  NotCrossedOut = 29,

  FgBlack = 30,
  FgRed = 31,
  FgGreen = 32,
  FgYellow = 33,
  FgBlue = 34,
  FgMagenta = 35,
  FgCyan = 36,
  FgWhite = 37,
  FgDefault = 39,

  BgBlack = 40,
  BgRed = 41,
  BgGreen = 42,
  BgYellow = 43,
  BgBlue = 44,
  BgMagenta = 45,
  BgCyan = 46,
  BgWhite = 47,
  BgDefault = 49,
}
