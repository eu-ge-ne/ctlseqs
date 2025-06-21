import { assertEquals } from "@std/assert";

import { ris } from "../src/mod.ts";

Deno.test("ris", () => {
  assertEquals(ris, new TextEncoder().encode("\x1bc"));
});
