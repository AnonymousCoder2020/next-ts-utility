# next-ts-utility

```
npm i https://github.com/AnonymousCoder2020/next-ts-utility
```

## Usage

```js
import { condProps, ... } from 'next-ts-utility'
```

## Utilities

### Array

#### eachAsync

```js
;(async () => {
  await eachAsync(['https://a.com', 'https://b.com', 'https://c.com'], async url => {
    await fetch(url) // Execute synchronously in order.
  })

  // All requests are completed!
})()
```

#### eachMulti

```js
let a = [10, 11, 12, 13]
let b = [/regexp/, 'string', false]

eachMulti([a, b] as const, ([valueA, valueB], i) => {

  Math.abs(valueA) // <- OK
  // valueA: number
  // valueB: string | boolean | RegExp

  console.log(valueA, valueB, i)
})
// ->
//   10 /regexp/  0
//   11 'string'  1
//   12 false     2
//   13 undefined 3
```

#### findResult

```js
let regs = [/aa(.+)/, /cc(.+)/, /(.+)ee/]
let text = 'coffee'

let res = findResult(regs, reg => text.match(reg))
// res: RegExpMatchArray

console.log(res?.[1]) // -> 'ffee'
```

#### divArray

```js
divArray([0, 1, '2', 3, 4, 5, /6/, 7], 3)
/* ->
[
  [0, 1, '2'],
  [3, 4, 5],
  [/6/, 7]
]
*/
```

### Lang

#### instanceOr

```js
// Pure Typescript
if (node instanceof HTMLInputElement || node instanceof HTMLTextAreaElement || node instanceof HTMLSelectElement) {
  node.value // No error occurs.
}
```

↓

```js
if (instanceOr(node, [HTMLInputElement, HTMLTextAreaElement, HTMLSelectElement])) {
  node.value // No error occurs.
  // node: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
}
```

#### getOnCorrectness

Extension of the ternary operator.

```js
// Pure Typescript
const res = {
  true() {
    // Complex processing...
    return 1
  },
  false() {
    // ...
    return 0
  }
}[condition.toString() as 'true' | 'false']()
```

↓

```js
const res = getOnCorrectness(condition, {
  true() {
    // ...
    return 1
  },
  false() {
    // ...
    return 0
  },
})
```

### Object

#### condProps

```js
// Pure Typescript
let obj = {
  ...(conditionA && { a: 0 }),
  ...(conditionB && { b: 1 }),
  c: 2,
}
```

↓

```js
let obj = {
  ...condProps({
    a: [conditionA, 0],
    b: [conditionB, 1],
  }),
  c: 2,
}
```

### Number

#### between

`between(start: number, end: number, step: number)`

```js
between(1, 5) // [2, 3, 4]
between(1, 9, 2) // [3, 5, 7]

between(8, 3) // [7, 6, 5, 4]
between(3, 8, -1) // [7, 6, 5, 4]
```

#### div

```js
div([0, 1, /2/, 3, 4, '5', 6], 3) // -> [3, 3, 1]
```

### RegExp

#### withFlag

```js
withFlag(/regepx/g, 'igu') // -> /regexp/gui
```
