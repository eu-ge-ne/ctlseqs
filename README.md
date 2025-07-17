# @eu-ge-ne/ctlseqs

XTerm Control Sequences for Node.js, Deno and Bun.

[![JSR](https://jsr.io/badges/@eu-ge-ne/ctlseqs)](https://jsr.io/@eu-ge-ne/ctlseqs)
[![JSR Score](https://jsr.io/badges/@eu-ge-ne/ctlseqs/score)](https://jsr.io/@eu-ge-ne/ctlseqs)
[![codecov](https://codecov.io/gh/eu-ge-ne/ctlseqs/branch/main/graph/badge.svg?token=S2ZTAMYN6B)](https://codecov.io/gh/eu-ge-ne/ctlseqs)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=eu-ge-ne_ctlseqs&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=eu-ge-ne_ctlseqs)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=eu-ge-ne_ctlseqs&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=eu-ge-ne_ctlseqs)

- [API](#api)
  - [`ris`](#ris)
  - [`el`](#el)
  - [`cursor`](#cursor)
  - [`decsc / decrc`](#decsc--decrc)
  - [`decset() / decrst()`](#decset--decrst)
  - [`sgr()`](#sgr)
  - [`ech()`](#ech)
  - [`osc52()`](#osc52)
- [Links](#links)
- [License](#license)

## API

### `ris`

[Full Reset (RIS)](https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Controls-beginning-with-ESC:ESC-c.C91)

Syntax

```ts ignore
const ris: Uint8Array;
```

### `el`

[Erase in Line (EL)](https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-K.1C8B)

Syntax

```ts ignore
const el0: Uint8Array;

const el1: Uint8Array;

const el2: Uint8Array;
```

### `cursor`

[Cursor Up (CUU)](https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-A.1C81)

Syntax

```ts ignore
const cuu1: Uint8Array;

function cuu(n: number): Uint8Array;
```

[Cursor Down (CUD)](https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-B.1C82)

Syntax

```ts ignore
const cud1: Uint8Array;

function cud(n: number): Uint8Array;
```

[Cursor Forward (CUF)](https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-C.1C83)

Syntax

```ts ignore
const cuf1: Uint8Array;

function cuf(n: number): Uint8Array;
```

[Cursor Backward (CUB)](https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-D.1C84)

Syntax

```ts ignore
const cub1: Uint8Array;

function cub(n: number): Uint8Array;
```

[Cursor Position (CUP)](https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps;Ps-H.1D86)

Syntax

```ts ignore
function cup(ln: number, col: number): Uint8Array;
```

### `decsc / decrc`

[Save Cursor (DECSC)](https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Controls-beginning-with-ESC:ESC-7.C65)

Syntax

```ts ignore
const decsc: Uint8Array;
```

[Restore Cursor (DECRC)](https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Controls-beginning-with-ESC:ESC-8.C66)

Syntax

```ts ignore
const decrc: Uint8Array;
```

### `decset() / decrst()`

[DEC Private Mode Set (DECSET)](https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-?-Pm-h.1D0E)

Syntax

```ts ignore
function decset(...modes: DECSetMode[]): Uint8Array;
```

[DEC Private Mode Reset (DECRST)](https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-?-Pm-l.1D12)

Syntax

```ts ignore
function decrst(...modes: DECResetMode[]): Uint8Array;
```

### `sgr()`

[Character Attributes (SGR)](https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Pm-m.1CA7)

Syntax

```ts ignore
function sgr(...attrs: (SGRAttr | SGRColor)[]): Uint8Array;
```

### `ech()`

[Erase Character(s) (ECH)](https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps-X.1C98)

Syntax

```ts ignore
function ech(n: number): Uint8Array;
```

### `osc52()`

[Manipulate Selection Data (OSC52)](https://www.invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Operating-System-Commands:OSC-Ps;Pt-ST:Ps-=-5-2.101B)

Syntax

```ts ignore
function osc52(text: string): Uint8Array;
```

## Links

- <https://invisible-island.net/xterm/ctlseqs/ctlseqs.html>
- <https://vt100.net/docs/vt100-ug>

## License

[MIT](https://choosealicense.com/licenses/mit)
