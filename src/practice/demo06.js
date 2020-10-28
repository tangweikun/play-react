// 难度 ⭐⭐
// 入参
const data = {
  a1: 11,
  a2: 33,
  a3: 22,
  a4: 4,
};

// 根据值的最大的key，和最小的key
// 期望输出
// const expectOutput = { max: 'a2', min: 'a4' };

// 答案
function foo(inputData) {
  const res = Object.entries(inputData)
    .sort((a, b) => a[1] - b[1])
    .map((item) => item[0]);
  return `{ max: '${res[res.length - 1]}', min: '${res[0]}' }`;
}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
