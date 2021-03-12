// 难度 ⭐⭐
// 入参
const data = {
  a: [1, 4, 2],
  b: [3, 2, 4, 5],
  c: [2, 3],
  d: [1],
};

// 期望输出
const expectOutput = {
  ab: [
    [1, 4, 2],
    [3, 2, 4, 5],
  ],
  c2: [4, 6],
  d2: [2],
  c2d2: [[4, 6], [2]],
};

// 答案
function foo(inputData) {}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
