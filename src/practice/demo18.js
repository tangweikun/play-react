// 难度 ⭐⭐
// 入参
const data = {
  a: [1, 4, 2],
  b: [3, 9, 7],
};

// 期望输出
// const expectOutput = [['a', 'b'], [[1, 4, 2], [3, 9, 7]]]

// 答案错误
function foo(inputData) {
  return [Object.keys(inputData)].concat(Object.values(inputData));
}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
