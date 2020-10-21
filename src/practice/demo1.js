// 难度 ⭐
// 入参
const data = {
  a1: 12,
  a2: 13,
  a3: 14,
};

// 期望输出
// const expectOutput = ['a1', 'a2', 'a3'];

// 答案
function foo(inputData) {
  return Object.keys(inputData);
}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
