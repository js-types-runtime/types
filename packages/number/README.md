# @js-types-runtime/number

Lightweight finite number type checker. Zero dependencies.

## Installation

```bash
npm install @js-types-runtime/number
```

## Usage

```js
import { number } from '@js-types-runtime/number';

number(42); // true
number(3.14); // true
number(0); // true
number(Infinity); // false
number(NaN); // false
number('42'); // false
number(null); // false
```

## API

### `number(value)`

Checks if a value is a finite number.

- **value**: `unknown`
- **returns**: `boolean`

> Note: `Infinity`, `-Infinity` and `NaN` return `false`.

## TypeScript

This package includes type definitions with a type predicate:

```ts
const number: (v: unknown) => v is number;
```

So you get type narrowing:

```ts
const x: unknown = 42;
if (number(x)) {
  x.toFixed(2); // ✅ x is number
}
```

## License

MIT
