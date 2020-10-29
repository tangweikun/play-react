// 难度 ⭐⭐
// 入参
const data = {
  a: [1, 4, 2],
  b: [3, 9, 7],
};

// 期望输出
// const expectOutput = [['a', 'b'], [1, 4, 2, 3, 9, 7]]

// 答案
function foo(inputData) {
  let valueArr = [];
  for (let key in inputData) {
    valueArr = valueArr.concat(inputData[key]);
  }
  const res = [valueArr];
  return [Object.keys(inputData)].concat(res);
}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
