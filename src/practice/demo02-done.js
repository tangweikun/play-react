// 难度 ⭐⭐
// 入参
const data = {
  a1: 12,
  a2: 13,
  a3: 14,
};

// 期望输出
// const expectOutput = ['a1-0:12', 'a2-1:13', 'a3-2:14'];

// 答案
function foo(inputData) {
  return Object.keys(inputData).map(
    (item, index) => `${item}-${index}:${inputData[item]}`
  );
}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
