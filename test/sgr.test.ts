import { assertEquals } from "@std/assert";

import { sgr, SGRAttr } from "../src/mod.ts";

Deno.test("sgr", () => {
  const bytes = sgr();

  assertEquals(bytes, new TextEncoder().encode("\x1b[m"));
});

Deno.test("sgr normal", () => {
  const bytes = sgr(SGRAttr.Normal);

  assertEquals(bytes, new TextEncoder().encode("\x1b[0m"));
});

Deno.test("sgr bold", () => {
  const bytes = sgr(SGRAttr.Bold);

  assertEquals(bytes, new TextEncoder().encode("\x1b[1m"));
});

Deno.test("sgr fg", () => {
  const bytes = sgr(["fg", 0xff, 0xff, 0xff]);

  assertEquals(bytes, new TextEncoder().encode("\x1b[38;2;255;255;255m"));
});

Deno.test("sgr bg", () => {
  const bytes = sgr(["bg", 0xff, 0xff, 0xff]);

  assertEquals(bytes, new TextEncoder().encode("\x1b[48;2;255;255;255m"));
});
