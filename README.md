# @eu-ge-ne/ctlseqs

XTerm Control Sequences for Node.js, Deno and Bun.

[![JSR](https://jsr.io/badges/@eu-ge-ne/ctlseqs)](https://jsr.io/@eu-ge-ne/ctlseqs)
[![JSR Score](https://jsr.io/badges/@eu-ge-ne/ctlseqs/score)](https://jsr.io/@eu-ge-ne/ctlseqs)
[![codecov](https://codecov.io/gh/eu-ge-ne/ctlseqs/branch/main/graph/badge.svg?token=S2ZTAMYN6B)](https://codecov.io/gh/eu-ge-ne/ctlseqs)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=eu-ge-ne_ctlseqs&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=eu-ge-ne_ctlseqs)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=eu-ge-ne_ctlseqs&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=eu-ge-ne_ctlseqs)

- [API](#api)
  - [`cup()`](#cup)
  - [`decsc`](#decsc)
  - [`decrc`](#decrc)
  - [`ris`](#ris)
- [Links](#links)
- [License](#license)

## API

### `cup()`

[Cursor Position (CUP)](https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Functions-using-CSI-_-ordered-by-the-final-character-lparen-s-rparen:CSI-Ps;Ps-H.1D86)

Syntax

```ts ignore
function cup(row: number, col: number): Uint8Array;
```

### `decsc`

[Save Cursor (DECSC)](https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Controls-beginning-with-ESC:ESC-7.C65)

Syntax

```ts ignore
const decsc: Uint8Array;
```

### `decrc`

[Restore Cursor (DECRC)](https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Controls-beginning-with-ESC:ESC-8.C66)

Syntax

```ts ignore
const decrc: Uint8Array;
```

### `ris`

[Full Reset (RIS)](https://invisible-island.net/xterm/ctlseqs/ctlseqs.html#h4-Controls-beginning-with-ESC:ESC-c.C91)

Syntax

```ts ignore
const ris: Uint8Array;
```

## Links

- <https://invisible-island.net/xterm/ctlseqs/ctlseqs.html>
- <https://vt100.net/docs/vt100-ug>

## License

[MIT](https://choosealicense.com/licenses/mit)
