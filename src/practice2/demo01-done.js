// 难度 ⭐
// average
// 此段代码返回多个数的平均数。
// 入参
const data = [1, 2, 3];

// 期望输出
// const expectOutput = 2;

// 答案
function foo(inputData) {}

function average(data) {
  return data.reduce((acc, cur) => acc + cur, 0) / data.length;
}

console.log(average(data));

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
