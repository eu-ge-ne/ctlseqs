# @eu-ge-ne/ctlseqs

XTerm Control Sequences for Node.js, Deno and Bun.

[![JSR](https://jsr.io/badges/@eu-ge-ne/ctlseqs)](https://jsr.io/@eu-ge-ne/ctlseqs)
[![JSR Score](https://jsr.io/badges/@eu-ge-ne/ctlseqs/score)](https://jsr.io/@eu-ge-ne/ctlseqs)
[![codecov](https://codecov.io/gh/eu-ge-ne/ctlseqs/branch/main/graph/badge.svg?token=S2ZTAMYN6B)](https://codecov.io/gh/eu-ge-ne/ctlseqs)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=eu-ge-ne_ctlseqs&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=eu-ge-ne_ctlseqs)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=eu-ge-ne_ctlseqs&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=eu-ge-ne_ctlseqs)

- [API](#api)
  - [`ris`](#ris)
  - [`cup()`](#cup)
  - [`decsc / decrc`](#decsc--decrc)
  - [`decset() / decrst()`](#decset--decrst)
- [Links](#links)
- [License](#license)

## API

### `ris`

[Full Reset (RIS)](https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Controls-beginning-with-ESC:ESC-c.C91)

Syntax

```ts ignore
const ris: Uint8Array;
```

### `cup()`

[Cursor Position (CUP)](https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps;Ps-H.1D86)

Syntax

```ts ignore
function cup(row: number, col: number): Uint8Array;
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

## Links

- <https://invisible-island.net/xterm/ctlseqs/ctlseqs.html>
- <https://vt100.net/docs/vt100-ug>

## License

[MIT](https://choosealicense.com/licenses/mit)
