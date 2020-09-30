import React from 'react';
import { Modal, Input, Form, DatePicker, Radio } from 'antd';
import { addData, updateData, getData } from './api';

const { RangePicker } = DatePicker;

function Add(props) {
  const {
    isEdit,
    currentIndex,
    setVisible,
    dataSource,
    setDataSource,
    form,
  } = props; // 这些都是从父级传下来的
  const { getFieldDecorator, validateFields, getFieldValue } = form;

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
                    name: values.name,
                    desc: values.desc,
                  },
                  currentIndex
                );
              } else {
                addData({
                  name: values.name,
                  desc: values.desc,
                  activityStartTime: values.activityTime[0],
                  activityEndTime: values.activityTime[1],
                  id: Math.random().toString(16).slice(-8),
                  validityType: values.validityType,
                });
              }

              const dataSource = getData();
              setDataSource(dataSource);
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
            <Form.Item label='活动名称'>
              {getFieldDecorator('name', {
                initialValue: isEdit ? dataSource[currentIndex].username : '',
                rules: [
                  { required: true, message: 'Please input your username!' },
                ],
              })(<Input placeholder='输入姓名' />)}
            </Form.Item>
            <Form.Item label='活动描述'>
              {getFieldDecorator('desc', {
                initialValue: isEdit ? dataSource[currentIndex].username : '',
                rules: [
                  { required: true, message: 'Please input your username!' },
                ],
              })(<Input placeholder='输入姓名' />)}
            </Form.Item>
            <Form.Item label='活动时间'>
              {getFieldDecorator('activityTime', {
                initialValue: isEdit
                  ? dataSource[currentIndex].activityTime
                  : '',
                rules: [{ required: true, message: 'Please input your age!' }],
              })(
                <RangePicker
                  showTime={{ format: 'HH:mm' }}
                  format='YYYY-MM-DD HH:mm'
                  placeholder={['Start Time', 'End Time']}
                />
              )}
            </Form.Item>
            <Form.Item label='有效期类型'>
              {getFieldDecorator('validityType', {
                initialValue: isEdit
                  ? dataSource[currentIndex].validityType
                  : '1',
              })(
                <Radio.Group>
                  <Radio value={'1'}>固定日期</Radio>
                  <Radio value={'2'}>有效天数</Radio>
                </Radio.Group>
              )}
            </Form.Item>

            {/* 根据有效期类型进行显示内容上的更换 */}
            {getFieldValue('validityType') === '1' ? (
              <Form.Item>
                {getFieldDecorator('time', {
                  initialValue: isEdit ? dataSource[currentIndex].age : '',
                  rules: [
                    { required: true, message: 'Please input your age!' },
                  ],
                })(
                  <RangePicker
                    showTime={{ format: 'HH:mm' }}
                    format='YYYY-MM-DD HH:mm'
                    placeholder={['Start Time', 'End Time']}
                  />
                )}
              </Form.Item>
            ) : (
              <Form.Item>
                <div style={{ display: 'flex' }}>
                  <span>发放</span>
                  {getFieldDecorator('days', {
                    initialValue: isEdit
                      ? dataSource[currentIndex].username
                      : '',
                    rules: [
                      {
                        required: true,
                        message: 'Please input your username!',
                      },
                    ],
                  })(<Input style={{ width: 100 }} />)}
                  <span>天内有效</span>
                </div>
              </Form.Item>
            )}
          </Form>
        </Modal>
      }
    </div>
  );
}

export default Form.create({})(Add); // 用Form来装饰Add组件
