// 难度 ⭐⭐
// 入参
const data = {
  a1: 12,
  a2: 13,
  a3: 14,
};

// 期望输出
// const expectOutput = {a1: 'a1-12', a2: 'a2-13', a3: 'a3-14' };

// 答案
function foo(inputData) {
  const res = {};
  for (var key in inputData) {
    res[key] = `${key}-${inputData[key]}`;
  }
  return res;
}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
