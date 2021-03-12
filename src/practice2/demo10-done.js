// 难度 ⭐
// prepend
// 在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组

// 答案
// function foo(inputData) {}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo([1, 2, 3, 4], 10)); // [10, 1, 2, 3, 4]

function foo(inputData, num) {
  return [num].concat(inputData);
}
