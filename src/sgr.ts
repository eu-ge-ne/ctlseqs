import { encoder } from "./encoder.ts";

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
