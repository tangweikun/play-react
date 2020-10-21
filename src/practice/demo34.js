// 难度 ⭐⭐
// 入参
const data = [2, '4', 'a', { a: 3 }, [4], [], [], true, false];

// 期望输出
const expectOutput = {
  number: [2],
  str: ['4', 'a'],
  array: [[4], [], []],
  obj: [{ a: 3 }],
  bool: [true, false],
};

// 答案
function foo(inputData) {}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
