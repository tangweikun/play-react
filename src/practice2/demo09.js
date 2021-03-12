// 难度 ⭐
// truncate
// 删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组

// 答案
function foo(inputData) {
  return inputData.slice(0, -1);
}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo([1, 2, 3, 4])); // [1, 2, 3]
