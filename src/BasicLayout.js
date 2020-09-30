import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default function BasicLayout(props) {
  return (
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode='inline'
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key='sub1'
            title={
              <span>
                <Icon type='user' />
                简单的增删改查
              </span>
            }
          >
            <Menu.Item key='demo4'>
              <Link to='/demo4'>demo4</Link>
            </Menu.Item>
            <Menu.Item key='demo5'>
              <Link to='/demo5'>demo5</Link>
            </Menu.Item>
            <Menu.Item key='demo6'>
              <Link to='/demo6'>demo6</Link>
            </Menu.Item>
            <Menu.Item key='demo7'>
              <Link to='/demo7'>demo7</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key='sub2'
            title={
              <span>
                <Icon type='laptop' />
                简单的接口请求
              </span>
            }
          >
            <Menu.Item key='demo1'>
              <Link to='/demo1'>demo1</Link>
            </Menu.Item>
            <Menu.Item key='demo2'>
              <Link to='/demo2'>demo2</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key='sub3'
            title={
              <span>
                <Icon type='notification' />
                TODOLIST
              </span>
            }
          >
            <Menu.Item key='demo3'>
              <Link to='/demo3'>demo3</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key='sub4'
            title={
              <span>
                <Icon type='notification' />
                这些可以先不看
              </span>
            }
          >
            <Menu.Item key='demo8'>
              <Link to='/demo8'>demo3</Link>
            </Menu.Item>
            <Menu.Item key='demo9'>
              <Link to='/demo9'>demo9</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key='sub5'
            title={
              <span>
                <Icon type='notification' />
                实战
              </span>
            }
          >
            <Menu.Item key='demo11'>
              <Link to='/demo11'>demo11</Link>
            </Menu.Item>
            <Menu.Item key='demo12'>
              <Link to='/demo12'>demo12</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}
