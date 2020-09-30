import React from 'react';
import { Modal, Input, Form } from 'antd';

export default function Add(props) {
  const [formRef] = Form.useForm(); // 非常重要，创建一个form表单的引用，语法固定，别改
  const { isEdit, currentIndex, setVisible, dataSource, setDataSource } = props; // 这些都是从父级传下来的

  return (
    <div>
      {
        <Modal
          visible
          onCancel={() => {
            setVisible(false);
          }}
          onOk={() => {
            formRef.validateFields().then((values) => {
              if (isEdit) {
                dataSource[currentIndex].username = values.username;
                dataSource[currentIndex].age = values.age;
                setDataSource([...dataSource]);
              } else {
                dataSource.push({
                  username: values.username,
                  age: values.age,
                  id: Math.random().toString(16).slice(-8),
                });
                setDataSource([...dataSource]);
              }
            });
            setVisible(false);
          }}
          title={isEdit ? '编辑记录' : '新增记录'}
        >
          {/* form={formRef}是将引用指向这个Form */}
          <Form
            form={formRef}
            initialValues={{
              username: isEdit ? dataSource[currentIndex].username : '',
              age: isEdit ? dataSource[currentIndex].age : '',
            }}
          >
            {/* name很重要，form用于管理字段值 */}
            <Form.Item label='姓名' name='username'>
              <Input />
            </Form.Item>
            <Form.Item label='年龄' name='age'>
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      }
    </div>
  );
}
