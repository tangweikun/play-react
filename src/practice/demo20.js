// 难度 ⭐⭐
// 入参
const data = {
  a: [1, 4, 2],
  b: [3, 9, 7],
};

// 期望输出
// const expectOutput = {a: [1, 2, 4], b: [3, 7, 9] }

// 答案
function foo(inputData) {
  const hash = {};
  for (let key in inputData) {
    hash[key] = inputData[key].sort((a, b) => a - b);
  }
  return hash;
}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
