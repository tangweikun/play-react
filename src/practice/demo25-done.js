// 难度 ⭐⭐
// 入参
const data = {
  a: [1, 4, 2],
  b: [3, 2, 4, 5],
  c: [2, 3],
};

// 期望输出
const expectOutput = {
  a: { sum: 7, product: 8, count: 3, index: 0 },
  b: { sum: 14, product: 120, count: 4, index: 1 },
  c: { sum: 5, product: 6, count: 2, index: 2 },
};

// 答案
function foo(inputData) {
  const res = {};

  Object.keys(inputData).forEach((x, index) => {
    const arr = inputData[x];
    res[x] = {
      sum: arr.reduce((acc, cur) => acc + cur, 0),
      product: arr.reduce((acc, cur) => acc * cur, 1),
      count: arr.length,
      index,
    };
  });

  return res;
}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));

// function formatData(data) {
//   const hash = {};
//   let index = 0;
//   for (let i in data) {
//     hash[i] = {};
//     hash[i].sum = data[i].reduce((acc, cur) => acc + cur, 0);
//     hash[i].product = data[i].reduce((acc, cur) => acc * cur, 1);
//     hash[i].count = data[i].length;
//     hash[i].index = index;
//     index++;
//   }

//   return hash;
// }
// console.log(formatData(data));
