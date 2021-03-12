// 难度 ⭐
// digitize
// 将输入的数字拆分成单个数字组成的数组

// 答案

// 打印出来的和期望输出一样就说明答案写对了
console.log(f(431)); // [4, 3, 1]
console.log(foo(12)); // [1,2]

function f(data) {
  return String(data)
    .split('')
    .map((n) => Number(n));
}

function foo(inputData) {
  const arr = [];
  const str = String(inputData);
  for (let i = 0; i < str.length; i++) {
    arr.push(Number(str[i]));
  }
  return arr;
}
