// STEP1 从接口获取数据

import React from 'react';
import { Table, Button, Input } from 'antd';

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
      currentUserId: '',
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
        <div>
          {/* 这个Input是个非受控组件，我们只是在他的值改变的时候同时给currentUserId赋值，并没有通过currentUserId去控制他的值 */}
          <Input
            style={{ width: 100 }}
            placeholder='输入userId'
            onChange={(e) => {
              this.setState({ currentUserId: e.target.value });
            }}
          />
          <Button
            type='primary'
            onClick={() => {
              let url;
              if (this.state.currentUserId === '') {
                url = 'https://jsonplaceholder.typicode.com/posts';
              } else {
                url = `https://jsonplaceholder.typicode.com/users/${this.state.currentUserId}/posts`;
              }
              // 点击查询的时候再次触发接口请求
              fetch(url)
                .then((response) => response.json()) // 这个是固定语法，fetch方法提供的方法
                .then((res) => {
                  // 接口结果返回时修改dataSource,触发页面更新
                  this.setState({ dataSource: res });
                });
            }}
          >
            查询
          </Button>
        </div>
        <Table
          columns={columns}
          dataSource={this.state.dataSource}
          rowKey='id'
        />
      </div>
    );
  }
}
