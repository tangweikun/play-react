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
                subnav 1
              </span>
            }
          >
            <Menu.Item key='1'>
              <Link to='/demo1'>demo1</Link>
            </Menu.Item>
            <Menu.Item key='2'>
              <Link to='/demo2'>demo2</Link>
            </Menu.Item>
            <Menu.Item key='3'>
              <Link to='/demo3'>demo3</Link>
            </Menu.Item>
            <Menu.Item key='4'>
              <Link to='/demo4'>demo4</Link>
            </Menu.Item>
            <Menu.Item key='5'>
              <Link to='/demo5'>demo5</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key='sub2'
            title={
              <span>
                <Icon type='laptop' />
                subnav 2
              </span>
            }
          >
            <Menu.Item key='6'>
              <Link to='/demo6'>demo6</Link>
            </Menu.Item>
            <Menu.Item key='7'>
              <Link to='/demo7'>demo7</Link>
            </Menu.Item>
            <Menu.Item key='8'>
              <Link to='/demo8'>demo8</Link>
            </Menu.Item>
            <Menu.Item key='9'>
              <Link to='/demo9'>demo9</Link>
            </Menu.Item>
            <Menu.Item key='10'>
              <Link to='/demo10'>demo10</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key='sub3'
            title={
              <span>
                <Icon type='notification' />
                subnav 3
              </span>
            }
          >
            <Menu.Item key='11'>
              <Link to='/demo11'>demo11</Link>
            </Menu.Item>
            <Menu.Item key='12'>
              <Link to='/demo12'>demo12</Link>
            </Menu.Item>
            <Menu.Item key='13'>
              <Link to='/demo13'>demo13</Link>
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
