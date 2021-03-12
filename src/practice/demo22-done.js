// 难度 ⭐
// 入参
const data = {
  a: [1, 4, 2],
  b: [3, 9, 7],
};

// 期望输出
// const expectOutput = {a: 7, b: 19 }

// 答案
function foo(inputData) {}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));

function formData(data) {
  const hash = {};
  for (let i in data) {
    hash[i] = data[i].reduce((acc, cur) => acc + cur, 0);
  }
  return hash;
}

console.log(formData(data));
