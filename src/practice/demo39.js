// 难度 ⭐⭐
// 入参
const data1 = [{ a: 11, b: 11 }, { c: 11, b: 11 }, { c: 11 }];

const data2 = [{ a: 22 }, { c: 22, a: 22 }];

// c作为d的值，没有c就用d作为d的值

// 期望输出
const expectOutput = [{ a: 22, b: 11 }, { c: 22, b: 11, a: 22 }, { c: 11 }];

// 答案
function foo(inputData) {}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data1, data2));
