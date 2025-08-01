import { CSI } from "./cchar.ts";
import { encoder } from "./codec.ts";

/**
 * SGR Attributes
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

/**
 * Character Attributes (SGR)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Pm-m.1CA7}
 */
export function sgr(...attrs: SGRAttr[]): Uint8Array {
  return encoder.encode(CSI + attrs.join(";") + "m");
}

/**
 * SGR 256 Color
 */
export type SGRColor256 = [number, number, number];

/**
 * Set foreground color using RGB values (SGR)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Pm-m.1CA7}
 */
export function sgr_256_fg(fg: SGRColor256): Uint8Array {
  return encoder.encode(CSI + "38;2;" + fg.join(";") + "m");
}

/**
 * Set background color using RGB values (SGR)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Pm-m.1CA7}
 */
export function sgr_256_bg(bg: SGRColor256): Uint8Array {
  return encoder.encode(CSI + "48;2;" + bg.join(";") + "m");
}

/**
 * Set background & foreground color using RGB values (SGR)
 *
 * @see {@link https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Pm-m.1CA7}
 */
export function sgr_256_bf(bg: SGRColor256, fg: SGRColor256): Uint8Array {
  return encoder.encode(
    CSI + "48;2;" + bg.join(";") + "m" +
      CSI + "38;2;" + fg.join(";") + "m",
  );
}
