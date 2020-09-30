import React from 'react';
import { Button, Table } from 'antd';
import Add from './Add';
import { getData, deleteData } from './api';

export default class Demo5 extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
      visible: false,
      isEdit: false,
      currentIndex: null,
    };
  }

  componentDidMount() {
    const dataSource = getData();
    this.setState({ dataSource: [...dataSource] });
  }

  handleAdd() {
    this.setState({ isEdit: false, visible: true });
  }

  render() {
    const columns = [
      { title: '姓名', dataIndex: 'username' },
      { title: '年龄', dataIndex: 'age' },
      {
        title: '操作',
        dataIndex: 'operation',
        render: (_, record, index) => {
          return (
            <div>
              <Button
                style={{ marginRight: 20 }}
                onClick={() => {
                  this.setState({
                    visible: true,
                    isEdit: true,
                    currentIndex: index,
                  });
                }}
              >
                编辑
              </Button>
              <Button
                onClick={() => {
                  deleteData(index);

                  // 删除后重新获取一次表单数据
                  const dataSource = getData();
                  this.setState({ dataSource });
                }}
              >
                删除
              </Button>
            </div>
          );
        },
      },
    ];

    return (
      <div>
        {this.state.visible && (
          <Add
            isEdit={this.state.isEdit}
            setVisible={(visible) => this.setState({ visible })}
            currentIndex={this.state.currentIndex}
            dataSource={this.state.dataSource}
            setDataSource={(dataSource) => this.setState({ dataSource })}
          />
        )}

        <Button type='primary' onClick={() => this.handleAdd()}>
          新增
        </Button>
        <Table
          columns={columns}
          dataSource={this.state.dataSource}
          rowKey='id'
        />
      </div>
    );
  }
}
