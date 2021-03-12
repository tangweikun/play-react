// 难度 ⭐⭐
// 入参
const data = {
  a: [1, 4, 2],
  b: [3, 9, 7],
};

// 期望输出
// const expectOutput = {a: [1, 4, 16], b: [9, 49, 81] }

// 答案
function foo(inputData) {}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
function formData(data) {
  const res = {};
  for (let i in data) {
    res[i] = data[i].map((x) => x * x).sort((a, b) => a - b);
  }
  return data;
}

console.log(formData(data));
