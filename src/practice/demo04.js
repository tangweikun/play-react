// TODO:使用Object.values
// TODO:使用reduce

// 难度 ⭐
// 入参
const data = {
  a1: 12,
  a2: 13,
  a3: 14,
};

// 求和
// 期望输出
// const expectOutput = 39;

// 答案
function foo(inputData) {
  let sum = 0;
  for (let k in inputData) {
    sum = sum + inputData[k];
  }
  return sum;
}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
