// 难度 ⭐
// 入参
const data = [2, 3, 12, 8];

// 求最小值，最大值
// 期望输出
// const expectOutput = { min: 2, max: 12 }

// 答案
function foo(inputData) {
  const min = Math.min(...inputData);
  const max = Math.max(...inputData);
  return `{ min: ${min}, max: ${max}}`;
}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
