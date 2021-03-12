// 难度 ⭐⭐
// 入参
const data = {
  a: [1, 4, 2],
  b: [3, 2, 4, 5],
  c: [2, 3],
  d: [1],
};

// 期望输出
const expectOutput = {
  ab: [
    [1, 4, 2],
    [3, 2, 4, 5],
  ],
  c2: [4, 6],
  d2: [2],
  c2d2: [[4, 6], [2]],
};

// 答案
function foo(data) {
  const { a, b, c, d } = data;
  return {
    ab: [a, b],
    c2: c.map((x) => x * 2),
    d2: d.map((x) => x * 2),
    c2d2: [c.map((x) => x * 2), d.map((x) => x * 2)],
  };
}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));

function formatData(data) {
  const hash = {
    ab: [],
    c2d2: [],
  };
  Object.keys(data).forEach((item, index) => {
    if (item === 'a' || item === 'b') {
      hash.ab.push(data[item]);
    }
    if (item === 'c' || item === 'd') {
      hash[`${item}2`] = data[item].map((x) => x * 2);
      hash.c2d2.push(hash[`${item}2`]);
    }
  });

  return hash;
}

console.log(formatData(data));
