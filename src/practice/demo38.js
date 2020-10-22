// 难度 ⭐⭐
// 入参
const data = [
  { a: 3, b: 3 },
  { c: 4, b: 9 },
  { c: 5 },
  { c: 1, b: 1, d: 2 },
  { d: 9 },
];

// c作为d的值，没有c就用d作为d的值

// 期望输出
const expectOutput = [
  { a: 3, b: 3 },
  { d: 4, b: 9 },
  { d: 5 },
  { d: 1, b: 1 },
  { d: 9 },
];

// 答案
function foo(inputData) {}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
