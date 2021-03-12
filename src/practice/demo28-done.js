// 难度 ⭐⭐⭐
// 入参
const data = {
  a: [1, 4, 2],
  b: [3, 2, 4, 5],
  c: [2, 3],
  d: [1],
};

// 期望输出
const expectOutput = {
  a: [1, 4, 2],
  b: [3, 2, 4, 5],
  cd: [[2, 3], [1]],
  cdPro: [2, 3, 1],
  sum: 27,
  sums: [7, 14, 5, 1],
};

// 答案
function foo(inputData) {}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));

function formatData(data) {
  const { a, b, c, d } = data;

  function sum(count) {
    return count.reduce((acc, cur) => acc + cur, 0);
  }

  return {
    a,
    b,
    cd: [c, d],
    cdPro: c.concat(d),
    sum: sum(a) + sum(b) + sum(c) + sum(d),
    sums: [sum(a), sum(b), sum(c), sum(d)],
  };
}

console.log(formatData(data));
