import { assertEquals } from "@std/assert";

import {
  sgr,
  sgr_256_bf,
  sgr_256_bg,
  sgr_256_fg,
  SGRAttr,
} from "../src/mod.ts";

Deno.test("sgr", () => {
  const bytes = sgr();

  assertEquals(bytes, new TextEncoder().encode("\x1b[m"));
});

Deno.test("sgr default", () => {
  const bytes = sgr(SGRAttr.Default);

  assertEquals(bytes, new TextEncoder().encode("\x1b[0m"));
});

Deno.test("sgr bold", () => {
  const bytes = sgr(SGRAttr.Bold);

  assertEquals(bytes, new TextEncoder().encode("\x1b[1m"));
});

Deno.test("sgr 256 fg", () => {
  const bytes = sgr_256_fg([0xff, 0xff, 0xff]);

  assertEquals(bytes, new TextEncoder().encode("\x1b[38;2;255;255;255m"));
});

Deno.test("sgr 256 bg", () => {
  const bytes = sgr_256_bg([0xff, 0xff, 0xff]);

  assertEquals(bytes, new TextEncoder().encode("\x1b[48;2;255;255;255m"));
});

Deno.test("sgr 256 bg fg", () => {
  const bytes = sgr_256_bf([0xff, 0xff, 0xff], [0xff, 0xff, 0xff]);

  assertEquals(
    bytes,
    new TextEncoder().encode("\x1b[48;2;255;255;255m\x1b[38;2;255;255;255m"),
  );
});
