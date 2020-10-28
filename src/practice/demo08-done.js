// 难度 ⭐
// 入参
const data = [2, 3, 12, 8];

// 求和
// 期望输出
// const expectOutput = 25

// 答案
function foo(inputData) {
  return inputData.reduce((sum, current) => sum + current);
}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
