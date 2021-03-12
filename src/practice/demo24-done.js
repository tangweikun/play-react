// 难度 ⭐
// 入参
const data = {
  a: [1, 4, 2],
  b: [3, 2, 4, 8],
  c: [2, 3],
};

// 期望输出
// const expectOutput = [6, 24, 8, 8]

// 答案
function foo(data) {
  const res = [];
  for (let key in data) {
    const temp = data[key];
    for (let i in temp) {
      res[i] = (res[i] || 1) * temp[i];
    }
  }

  return res;
}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));

function formatData(data) {
  const arr = [];
  for (let i in data) {
    for (let j = 0; j < data[i].length; j++) {
      if (!arr[j]) {
        arr[j] = 1;
      }
      arr[j] *= data[i][j];
    }
  }
  return arr;
}

console.log(formatData(data));
