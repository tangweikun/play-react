import React, { useState } from 'react';
import { Button, Table, Modal, Input, Form } from 'antd';
import Add from './Add';

export default function Demo5() {
  const [dataSource, setDataSource] = useState([]);
  const [visible, setVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

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
                setVisible(true);
                setIsEdit(true);
                setCurrentIndex(index);
              }}
            >
              编辑
            </Button>
            <Button
              onClick={() => {
                dataSource.splice(index, 1);
                setDataSource([...dataSource]);
              }}
            >
              删除
            </Button>
          </div>
        );
      },
    },
  ];

  function handleAdd() {
    setIsEdit(false);
    setVisible(true);
  }

  return (
    <div>
      {visible && (
        <Add
          isEdit={isEdit}
          setVisible={setVisible}
          currentIndex={currentIndex}
          dataSource={dataSource}
          setDataSource={setDataSource}
        />
      )}

      <Button type='primary' onClick={handleAdd}>
        新增
      </Button>
      <Table columns={columns} dataSource={dataSource} rowKey='id' />
    </div>
  );
}
