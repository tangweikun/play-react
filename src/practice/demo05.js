// 难度 ⭐⭐
// 入参
const data = {
  a1: 11,
  a2: 33,
  a3: 22,
  a4: 4,
};

// 根据值的大小进行排序
// 期望输出
// const expectOutput = ['a4', 'a1', 'a3', 'a2'];

// 答案
function foo(inputData) {
  return Object.entries(inputData)
    .sort((a, b) => a[1] - b[1])
    .map((item) => item[0]);
}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
