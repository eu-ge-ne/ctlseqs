import { assertEquals } from "@std/assert";

import { DECResetMode, decrst } from "../src/mod.ts";

Deno.test("decrst", () => {
  const bytes = decrst(DECResetMode.P1049);

  assertEquals(bytes, new TextEncoder().encode("\x1b[?1049l"));
});
