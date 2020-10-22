// 难度 ⭐⭐
// 入参
const data = [1, 3, -3, 0, '5', 'a'];
const incomeRate = 1.2;
const outcomeRate = 0.8;

// 期望输出
const expectOutput = [
  {
    title: '收入',
    amount: 1.2,
  },
  {
    title: '收入',
    amount: 3.6,
  },
  {
    title: '支出',
    amount: 2.4,
  },
  {
    title: '收入',
    amount: 0,
  },
  {
    title: '收入',
    amount: 6,
  },
  {
    title: '脏数据',
  },
];

// 答案
function foo(inputData) {}

// 打印出来的和期望输出一样就说明答案写对了
console.log(foo(data));
