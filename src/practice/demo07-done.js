// 难度 ⭐
// 入参
const data = {
  a1: 11,
  a2: 33,
  a3: 22,
  a4: 4,
};

// b1取a1, c2取a2，c3取a3，d1取a4的值
// 期望输出
// const expectOutput = { b1: 11, c2: 33, c3: 22, d1: 4 };

// 答案
function foo(inputData) {
  const { a1: b1, a2: c2, a3: c3, a4: d1 } = inputData;

  return { b1, c2, c3, d1 };
}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
