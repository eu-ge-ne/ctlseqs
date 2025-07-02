import { assertEquals } from "@std/assert";

import { cup, cuu } from "../src/mod.ts";

Deno.test("cuu", () => {
  const bytes = cuu(10);

  assertEquals(bytes, new TextEncoder().encode("\x1b[10A"));
});

Deno.test("cup", () => {
  const bytes = cup(1, 1);

  assertEquals(bytes, new TextEncoder().encode("\x1b[1;1H"));
});
