import { assertEquals } from "@std/assert";

import { osc52 } from "../src/mod.ts";

Deno.test("osc52", () => {
  const bytes = osc52("Lorem ipsum");

  assertEquals(
    bytes,
    new TextEncoder().encode(`\x1b]52;c;${btoa("Lorem ipsum")}\x1b\\`),
  );
});
