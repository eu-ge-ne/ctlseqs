import { assertEquals } from "@std/assert";

import { decset, DECSetMode } from "../src/mod.ts";

Deno.test("decset", () => {
  const bytes = decset();

  assertEquals(bytes, new TextEncoder().encode(""));
});

Deno.test("decset mode", () => {
  const bytes = decset(DECSetMode.ALTSCR);

  assertEquals(bytes, new TextEncoder().encode("\x1b[?1049h"));
});
