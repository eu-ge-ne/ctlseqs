import { assertEquals } from "@std/assert";

import { decset, DECSetMode } from "../src/mod.ts";

Deno.test("decset", () => {
  const bytes = decset(DECSetMode.P1049);

  assertEquals(bytes, new TextEncoder().encode("\x1b[?1049h"));
});
