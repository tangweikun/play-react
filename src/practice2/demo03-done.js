// 难度 ⭐
// capitalize
// 将字符串的首字母转成大写
// 入参
const data = 'fooBar';

// 期望输出
// const expectOutput = 'FooBar';

// 答案
function foo(inputData) {
  return inputData[0].toUpperCase() + inputData.slice(1);
}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
