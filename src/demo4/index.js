import React, { useState } from 'react';
import { Button, Table, Modal, Input } from 'antd';

export default function Demo4() {
  const [dataSource, setDataSource] = useState([]);
  const [visible, setVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
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
                setUsername(record.username);
                setAge(record.age);
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
        <Modal
          visible
          onOk={() => {
            setVisible(false);
            if (isEdit) {
              dataSource[currentIndex].username = username;
              dataSource[currentIndex].age = age;
              setDataSource([...dataSource]);
              setUsername(''); // 清空modal里面的username Input
              setAge(''); // 清空modal里面的age Input
            } else {
              dataSource.push({
                username,
                age,
                id: Math.random().toString(16).slice(-8),
              });
              setDataSource([...dataSource]);
              setUsername(''); // 清空modal里面的username Input
              setAge(''); // 清空modal里面的age Input
            }
          }}
          title={isEdit ? '编辑记录' : '新增记录'}
        >
          <div>
            <span>姓名</span>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <span>年龄</span>
            <Input value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
        </Modal>
      )}

      <Button type='primary' onClick={handleAdd}>
        新增
      </Button>
      <Table columns={columns} dataSource={dataSource} rowKey='id' />
    </div>
  );
}
