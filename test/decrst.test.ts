import { assertEquals } from "@std/assert";

import { DECResetMode, decrst } from "../src/mod.ts";

Deno.test("decrst", () => {
  const bytes = decrst();

  assertEquals(bytes, new TextEncoder().encode(""));
});

Deno.test("decrst mode", () => {
  const bytes = decrst(DECResetMode.ALTSCR);

  assertEquals(bytes, new TextEncoder().encode("\x1b[?1049l"));
});
