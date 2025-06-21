import { assertEquals } from "@std/assert";

import { cup } from "../src/mod.ts";

Deno.test("cup", () => {
  const bytes = cup(0, 0);

  assertEquals(bytes, new TextEncoder().encode("\x1b[1;1H"));
});
