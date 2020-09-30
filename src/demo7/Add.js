import React from 'react';
import { Modal, Input, Form } from 'antd';
import { addData, updateData } from './api';

function Add(props) {
  const {
    isEdit,
    currentIndex,
    setVisible,
    dataSource,
    setDataSource,
    form,
  } = props; // 这些都是从父级传下来的
  const { getFieldDecorator, validateFields } = form;

  return (
    <div>
      {
        <Modal
          visible
          onCancel={() => {
            setVisible(false);
          }}
          onOk={() => {
            validateFields().then((values) => {
              setVisible(false);
              if (isEdit) {
                updateData(
                  {
                    username: values.username,
                    age: values.age,
                  },
                  currentIndex
                );
              } else {
                addData({
                  username: values.username,
                  age: values.age,
                  id: Math.random().toString(16).slice(-8),
                });
              }
            });
          }}
          title={isEdit ? '编辑记录' : '新增记录'}
        >
          <Form
            initialValues={{
              username: isEdit ? dataSource[currentIndex].username : '',
              age: isEdit ? dataSource[currentIndex].age : '',
            }}
          >
            <Form.Item label='姓名'>
              {getFieldDecorator('username', {
                rules: [
                  { required: true, message: 'Please input your username!' },
                ],
              })(<Input placeholder='输入姓名' />)}
            </Form.Item>
            <Form.Item label='年龄' name='age'>
              {getFieldDecorator('age', {
                rules: [{ required: true, message: 'Please input your age!' }],
              })(<Input placeholder='输入年龄' />)}
            </Form.Item>
          </Form>
        </Modal>
      }
    </div>
  );
}

export default Form.create({})(Add); // 用Form来装饰Add组件
