// 难度 ⭐⭐⭐
// 入参
const data = {
  a: 1,
  b: [3, 2],
  c: 'hello',
  d: 'world',
  k: { k1: '33', a: 99, b: [33, 99] },
  m: 7,
  b1: false,
  b3: false,
};

// 期望输出
const expectOutput = {
  number: [{ a: 1 }, { m: 7 }],
  string: [{ c: 'hello' }, { d: 'world' }],
  array: [{ b: [3, 2] }],
  object: [{ k: { k1: '33', a: 99, b: [33, 99] } }],
  bool: [{ b1: false }, { b2: false }],
};

// 答案
function foo(data) {
  const res = {};

  for (let key in data) {
    const type = Object.prototype.toString
      .call(data[key])
      .slice(8, -1)
      .toLowerCase();

    res[type]
      ? res[type].push({ [key]: data[key] })
      : (res[type] = [{ [key]: data[key] }]);
  }

  if (res.boolean) {
    res.bool = res.boolean;
  }

  const { boolean, ...rest } = res;

  return rest;
}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
