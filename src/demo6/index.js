import React, { useState, useEffect } from 'react';
import { Button, Table } from 'antd';
import Add from './Add';
import { getData, deleteData } from './api';

export default function Demo5() {
  const [dataSource, setDataSource] = useState([]);
  const [visible, setVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    // 每次弹框关闭时都重新获取一次表单数据
    if (!visible) {
      const dataSource = getData();
      setDataSource(dataSource);
    }
  }, [visible]);

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
                deleteData(index);

                // 删除后重新获取一次表单数据
                const dataSource = getData();
                setDataSource(dataSource);
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
