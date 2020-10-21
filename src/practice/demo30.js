// 难度 ⭐⭐⭐
// 入参
const data = {
  a: 1,
  b: [3, 2],
  c: 'hello',
  d: 'world',
  k: { k1: '33', a: 99, b: [33, 99] },
  m: 7,
  b1: false,
  b3: false,
};

// 期望输出
const expectOutput = {
  a: 1,
  c: 'hello',
  d: 'world',
  m: 7,
  b1: false,
  b3: false,
  extra: {
    b: [3, 2],
    k: { k1: '33', a: 99, b: [33, 99] },
  },
};

// 答案
function foo(inputData) {}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
