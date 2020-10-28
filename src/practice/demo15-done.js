// 难度 ⭐⭐
// 入参
const data = [2, 3, 12, 8, 9];

// 期望输出
// const expectOutput = {a:2, b:3, c:12, d:8, e:9}

// 答案
function foo(inputData) {
  const letters = ['a', 'b', 'c', 'd', 'e'];
  const hash = {};
  for (let i = 0; i < inputData.length; i++) {
    hash[letters[i]] = inputData[i];
  }
  return hash;
}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
