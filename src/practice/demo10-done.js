// 难度 ⭐
// 入参
const data = [2, 3, 12, 8];

// 从大到小排序
// 期望输出
// const expectOutput = [12, 8, 3, 2]

// 答案
function foo(inputData) {
  return inputData.sort((a, b) => b - a);
}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
