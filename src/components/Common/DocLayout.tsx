import React, { useEffect, useState } from 'react';
import './Layout.scss';
import { Avatar, Layout, Menu } from 'antd';
import { HomeOutlined, BookOutlined } from '@ant-design/icons';
import Logo from '../../assets/img/Logo';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import BreadCrumb from './BreadCrumb';
import Noa from 'assets/avatar/noa.gif';
import Choco from 'assets/avatar/choco.gif';

const { Header, Sider, Content } = Layout;

export default function DocLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('');
  useEffect(() => {
    setCurrentPage('/' + location.pathname.split('/')[1]);
  }, [location.pathname]);
  return (
    <Layout className="layout__main">
      <Header className="header">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <Menu
          className="menu"
          theme="dark"
          mode="horizontal"
          selectedKeys={[currentPage]}
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="/">
            <Link to="/">홈</Link>
          </Menu.Item>
          <Menu.Item key="/resource">
            <Link to="/resource">리소스</Link>
          </Menu.Item>
          <Menu.Item key="/document">
            <Link to="/document">문서</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={240} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['/document']}
            defaultOpenKeys={['/document']}
            style={{ height: '100%', borderRight: 0 }}
            selectedKeys={[location.pathname]}
          >
            <Menu.Item key="/document" icon={<HomeOutlined />}>
              <Link to="/document">HOME</Link>
            </Menu.Item>

            <Menu.SubMenu key="sub1" icon={<BookOutlined />} title="가이드">
              <Menu.Item key="/document/guide/code-convention">
                <Link to="/document/guide/code-convention">코드컨벤션</Link>
              </Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu key="sub2" icon={<Avatar size="small" src={Noa} />} title="NOA">
              <Menu.Item key="/document/noa/1">
                <Link to="/document/noa/1">공유문서</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              key="sub3"
              icon={<Avatar size="small" src={Choco} />}
              title="Choco"
            >
              <Menu.Item key="/document/choco/1">
                <Link to="/document/choco/1">공유문서</Link>
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <BreadCrumb />
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
