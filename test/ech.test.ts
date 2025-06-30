import { assertEquals } from "@std/assert";

import { ech } from "../src/mod.ts";

Deno.test("ech", () => {
  const bytes = ech(10);

  assertEquals(bytes, new TextEncoder().encode("\x1b[10X"));
});
