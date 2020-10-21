// 难度 ⭐⭐⭐
// 入参
const data = [
  { a: 1, type: 'A' },
  { b: 2, type: 'A' },
  { c: 22, type: 'B' },
  { d: { c1: 4 }, type: 'B' },
  { e: { c1: 4 }, type: 'C' },
  { f: 12, type: 'C' },
];

// 期望输出
const expectOutput = {
  A: [
    { a: 1, type: 'A' },
    { b: 2, type: 'A' },
  ],
  B: [
    { c: 22, color: 'foo' },
    { d: { c1: 4 }, color: 'foo' },
  ],
  C: { e: { c1: 4 }, f: 12 },
};

// 答案
function foo(inputData) {}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
