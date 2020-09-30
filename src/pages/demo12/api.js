export function addData(item) {
  // localStorage只能存储字符串类型

  const activityData = JSON.parse(localStorage.getItem('activityData')) || []; // 从localStorage里面取到 activityData，并使用JSON.parse 将其解析成数组
  activityData.push(item);
  localStorage.setItem('activityData', JSON.stringify(activityData)); // 存储时需将数组转成JSON字符串
}

export function deleteData(index) {
  const dataSource = JSON.parse(localStorage.getItem('dataSource')) || [];
  dataSource.splice(index, 1);
  localStorage.setItem('dataSource', JSON.stringify(dataSource));
}

export function updateData(item, index) {
  const dataSource = JSON.parse(localStorage.getItem('dataSource')) || [];
  dataSource[index].username = item.username;
  dataSource[index].age = item.age;
  localStorage.setItem('dataSource', JSON.stringify(dataSource));
}

export function getData() {
  const dataSource = JSON.parse(localStorage.getItem('dataSource')) || [];
  return dataSource;
}
