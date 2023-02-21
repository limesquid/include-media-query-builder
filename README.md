# include-media-query-builder

Build [include-media](https://github.com/eduardoboucas/include-media)-like media queries in JavaScript.

Powers [https://websktop.com](https://websktop.com).

![Version](https://img.shields.io/github/package-json/v/limesquid/include-media-query-builder)
![License](https://img.shields.io/npm/l/include-media-query-builder)
![Node version](https://img.shields.io/node/v/include-media-query-builder)
![Build](https://github.com/limesquid/include-media-query-builder/workflows/Build/badge.svg)
![Prettier](https://github.com/limesquid/include-media-query-builder/workflows/Prettier/badge.svg)

## Installation

```Shell
npm install include-media-query-builder --save
```

## API

```tsx
import { buildMediaQuery } from 'include-media-query-builder';

const sizes = {
  s: 768,
  m: 992,
  l: 1200,
};

console.log(buildMediaQuery(sizes, ['<s']));                  // (max-width: 767px)
console.log(buildMediaQuery(sizes, ['<s', '(hover: none)'])); // (max-width: 767px) and (hover: none)
console.log(buildMediaQuery(sizes, ['>s', '<=m']));           // (min-width: 769px) and (max-width: 992px)
console.log(buildMediaQuery(sizes, ['>=s', '<=m']));          // (min-width: 768px) and (max-width: 992px)
```
