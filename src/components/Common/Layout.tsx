import React, { useEffect, useState } from 'react';
import './Layout.scss';
import { Layout, Menu } from 'antd';
import Logo from '../../assets/img/Logo';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import BreadCrumb from './BreadCrumb';

const { Header, Content } = Layout;

export default function LayoutContainer({
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
          <Logo />
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
