# next-ts-utility

```
yarn add https://github.com/AnonymousCoder2020/next-ts-utility
```

## Usage

```js
import { condProps, ... } from 'next-ts-utility'
```

## Utilities

### Array

move

```js
let a = [0, 1, 2, 3, 4]

move(a, 1, 3)

console.log(a) // -> [0, 2, 3, 1, 4]
```

separate

```js
let arr = [0, 1, 2, 'str0', 'str1']

const [strs, nums] = separate(arr, (v): v is string => typeof v === 'string')

// strs: string[]
// nums: number[]

console.log(strs, nums) // -> ['str0', 'str1'] [0, 1, 2]
```

eachAsync

```js
;(async () => {
  await eachAsync(['https://a.com', 'https://b.com', 'https://c.com'], async url => {
    await fetch(url) // Execute synchronously in order.
  })

  // All requests are completed!
})()
```

eachMulti

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

findResult

```js
let regs = [/(.+)aa/, /(.+)bb/, /(.+)ee/]
let text = 'coffee'

let res: RegExpMatchArray = findResult(regs, reg => text.match(reg))

console.log(res?.[1]) // -> 'coff'
```

divArr

```js
divArr([0, 1, 2, 3, 4, 5, 6, 7], 3)
/* ->
[
  [0, 1, 2],
  [3, 4, 5],
  [6, 7]
]
*/
```

### Lang

instanceOr

```js
// Pure Typescript
if (node instanceof HTMLInputElement || node instanceof HTMLTextAreaElement || node instanceof HTMLSelectElement) {
  node.value // No error occurs.
}
// ↓ ↓ ↓
if (instanceOr(node, [HTMLInputElement, HTMLTextAreaElement, HTMLSelectElement])) {
  node.value // No error occurs.
  // node: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
}
```

branch

```js
const res = branch([
  [false, () => 'False'],
  [true, () => 'True']
]) // -> 'True'
```

### Object

condProps

```js
// Pure Typescript
let obj = {
  ...(conditionA && { a: 0 }),
  ...(conditionB && { b: 1 }),
  c: 2
}
// ↓ ↓ ↓
let obj = {
  ...condProps({
    a: [conditionA, 0],
    b: [conditionB, 1]
  }),
  c: 2
}
```

### String

curStr

```js
cutStr('VisualStudioCode', [6, 12]) // ['Visual', 'Studio', 'Code']
```

idxRange

```js
idxRange('adieus', 'die') // [1, 4]
idxRange('GitHub', /[A-Z][a-z]+/) // [0, 3]
```

lastIdxRange

```js
lastIdxRange('GitHub', /[A-Z][a-z]+/) // [3, 6]
```

### Number

zeroPad

```js
zeroPad(7, 3) // -> '007'
```

conversion

```js
conversion(400000, [60, 60, 24, 365]) // -> [ 40, 6, 15, 4 ]
// 400,000sec == 4days 15hour 6min 40sec
```

between

```js
between(1, 5) // [2, 3, 4]
between(1, 9, 2) // [3, 5, 7]

between(8, 3) // [7, 6, 5, 4]
between(3, 8, -1) // [7, 6, 5, 4]
```

divCount

```js
divCount([0, 1, 2, 3, 4, 5, 6], 3) // [3, 3, 1]
```

### RegExp

absorbAsReg

```js
absorbAsReg('[match str]', 'g') //  /\[match str\]/g
absorbAsReg(/(match str)/, 'i') //  /(match str)/i
```

withFlag

```js
withFlag(/regepx/g, 'igu') //  /regexp/gui
```

regAs

```js
regAs('.?+*[^]', 'igu') //  /\.\?\+\*\[\^\]/gui
```

isMtWithIdx

```js
const mts = 'JavaScript JScript'.matchAll(/Script/g)
const ls: number[] = mts.filter(isMtWithIdx).map(mt => mt.index)
```
