import React, { useEffect, useState } from 'react';
import './Layout.scss';
import { Layout, Menu } from 'antd';
import { HomeOutlined, AreaChartOutlined, FolderOutlined } from '@ant-design/icons';
import Logo from '../../assets/img/Logo';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import BreadCrumb from './BreadCrumb';

const { Header, Sider, Content } = Layout;

export default function ResourceLayout({
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
            defaultSelectedKeys={['About']}
            defaultOpenKeys={['About']}
            style={{ height: '100%', borderRight: 0 }}
            selectedKeys={[location.pathname]}
          >
            <Menu.Item key="/resource" icon={<HomeOutlined />}>
              <Link to="/resource">HOME</Link>
            </Menu.Item>
            <Menu.SubMenu key="sub1" icon={<AreaChartOutlined />} title="차트">
              <Menu.Item key="/resource/chart/round-chart">
                <Link to="/resource/chart/round-chart">원형차트</Link>
              </Menu.Item>

              <Menu.Item key="/resource/chart/line-chart">
                <Link to="/resource/chart/line-chart">라인차트</Link>
              </Menu.Item>

              <Menu.Item key="/resource/chart/tree-chart">
                <Link to="/resource/chart/tree-chart">트리맵차트</Link>
              </Menu.Item>

              <Menu.Item key="/resource/chart/calender-chart">
                <Link to="/resource/chart/calender-chart">캘린더차트</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub2" icon={<FolderOutlined />} title="컴포넌트">
              <Menu.Item key="/resource/component/table">
                <Link to="/resource/component/table">태이블</Link>
              </Menu.Item>
              <Menu.Item key="/resource/component/step">
                <Link to="/resource/component/step">단계</Link>
              </Menu.Item>
              <Menu.Item key="/resource/component/badge">
                <Link to="/resource/component/badge">뱃지</Link>
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
