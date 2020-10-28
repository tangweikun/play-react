// 难度 ⭐⭐
// 入参
const data = [2, 3, 12, 8];

// 期望输出
// const expectOutput = {0: [1, 2], 1: [2, 3], 2: [3, 12], 3: [4, 8]}

// 答案
function foo(inputData) {
  const hash = {};
  for (let i = 0; i < inputData.length; i++) {
    hash[i] = [i + 1, inputData[i]];
  }
  return hash;
}

function bar(inputData) {
  return inputData
    .map((x, index) => ({ [index]: [index + 1, x] }))
    .reduce((acc, y) => ({ ...acc, ...y }), {});
}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
