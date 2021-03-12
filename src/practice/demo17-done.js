// 难度 ⭐⭐
// 入参
const data = [2, 3, 12, 8];

// 期望输出
// const expectOutput = {2:4, 3:6, 12:24, 8:16}

// 答案
function foo(inputData) {
  const hash = {};
  for (let i = 0; i < inputData.length; i++) {
    hash[inputData[i]] = inputData[i] * 2;
  }
  return hash;
}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));

function bar(data) {
  return data.reduce(
    (acc, current) => ({ ...acc, [current]: current * 2 }),
    {}
  );
}
