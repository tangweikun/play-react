// 难度 ⭐⭐
// 入参
const data = [2, 3, 12, 8];

// 期望输出
// const expectOutput = [[0, 2], [1, 3], [2, 12], [3, 8]]

// 答案
function foo(inputData) {
  return inputData.map((item, index) => [index, item]);
}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
