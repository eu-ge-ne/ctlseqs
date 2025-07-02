import { assertEquals } from "@std/assert";

import { cub, cud, cuf, cup, cuu } from "../src/mod.ts";

Deno.test("cuu", () => {
  const bytes = cuu(1);

  assertEquals(bytes, new TextEncoder().encode("\x1b[1A"));
});

Deno.test("cud", () => {
  const bytes = cud(1);

  assertEquals(bytes, new TextEncoder().encode("\x1b[1B"));
});

Deno.test("cuf", () => {
  const bytes = cuf(1);

  assertEquals(bytes, new TextEncoder().encode("\x1b[1C"));
});

Deno.test("cub", () => {
  const bytes = cub(1);

  assertEquals(bytes, new TextEncoder().encode("\x1b[1D"));
});

Deno.test("cup", () => {
  const bytes = cup(1, 1);

  assertEquals(bytes, new TextEncoder().encode("\x1b[1;1H"));
});
