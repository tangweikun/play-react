// 难度 ⭐⭐
// 入参
const data = {
  a: [1, 4, 2],
  b: [3, 9, 7],
};

// 期望输出
// const expectOutput = [['a', 'b'], [[1, 4, 2], [3, 9, 7]]]

// 答案错误

function foo(data) {
  const arr = [[], []];
  for (let key in data) {
    arr[0].push(key);
    arr[1].push(data[key]);
  }
  return arr;
}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
