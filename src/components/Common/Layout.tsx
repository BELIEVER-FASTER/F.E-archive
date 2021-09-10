import React from 'react';
import './Layout.scss';
import { Layout, Menu } from 'antd';
import { HomeOutlined, AreaChartOutlined, FolderOutlined } from '@ant-design/icons';
import Logo from '../../assets/img/Logo';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import BreadCrumb from './BreadCrumb';

const { Header, Sider, Content } = Layout;

export default function LayoutContainer({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const location = useLocation();
  return (
    <Layout className="layout__main">
      <Header className="header">
        <div className="logo">
          <Logo />
        </div>
        <Menu className="menu" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">컴포넌트</Menu.Item>
          <Menu.Item key="2">데이터</Menu.Item>
          <Menu.Item key="3">리소스</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={240} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['About']}
            defaultOpenKeys={['About']}
            style={{ height: '100%', borderRight: 0 }}
            selectedKeys={[location.pathname]}
          >
            <Menu.Item key="About" icon={<HomeOutlined />}>
              <Link to="/">HOME</Link>
            </Menu.Item>
            <Menu.SubMenu key="sub1" icon={<AreaChartOutlined />} title="차트">
              <Menu.Item key="/chart/round-chart">
                <Link to="/chart/round-chart">원형차트</Link>
              </Menu.Item>

              <Menu.Item key="/chart/line-chart">
                <Link to="/chart/line-chart">라인차트</Link>
              </Menu.Item>

              <Menu.Item key="/chart/tree-chart">
                <Link to="/chart/tree-chart">트리맵차트</Link>
              </Menu.Item>

              <Menu.Item key="/chart/calender-chart">
                <Link to="/chart/calender-chart">캘린더차트</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub2" icon={<FolderOutlined />} title="컴포넌트">
              <Menu.Item key="/component/table">
                <Link to="/component/table">태이블</Link>
              </Menu.Item>
              <Menu.Item key="/component/step">
                <Link to="/component/step">단계</Link>
              </Menu.Item>
              <Menu.Item key="/component/badge">
                <Link to="/component/badge">뱃지</Link>
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
