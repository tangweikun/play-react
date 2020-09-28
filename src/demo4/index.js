import React, { useState, useRef } from 'react';
import { Button, Table, Modal, Input } from 'antd';

export default function Demo4() {
  const [dataSource, setDataSource] = useState([]);
  const [visible, setVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const columns = [
    { title: '姓名', dataIndex: 'username' },
    { title: '年龄', dataIndex: 'age' },
    { title: '操作', dataIndex: 'operation' },
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
            } else {
              dataSource.push({ username, age });
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
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
}
