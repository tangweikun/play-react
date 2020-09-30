// STEP1 从接口获取数据

import React from 'react';
import { Table } from 'antd';

const columns = [
  { title: 'userId', dataIndex: 'userId' },
  { title: 'id', dataIndex: 'id' },
  { title: 'title', dataIndex: 'title' },
  { title: 'body', dataIndex: 'body' },
];

export default class Demo10 extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
    };
  }

  componentDidMount() {
    // 页面初次渲染调用接口获取数据
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json()) // 这个是固定语法，fetch方法提供的方法
      .then((res) => {
        this.setState({ dataSource: res });
      });
  }

  render() {
    return (
      <div>
        <Table
          columns={columns}
          dataSource={this.state.dataSource}
          rowKey='id'
        />
      </div>
    );
  }
}
