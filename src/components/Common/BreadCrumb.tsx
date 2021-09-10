import { Breadcrumb } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

export default function BreadCrumb(): JSX.Element {
  const location = useLocation();
  const [path, setPath] = useState({
    first: 'Home',
    second: '',
    third: '',
  });

  useEffect(() => {
    const arr = location.pathname.split('/');
    setPath({ first: 'Home', second: arr[1], third: arr[2] });
  }, [location.pathname]);
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>{path.first}</Breadcrumb.Item>
      <Breadcrumb.Item>{path.second}</Breadcrumb.Item>
      <Breadcrumb.Item>{path.third}</Breadcrumb.Item>
    </Breadcrumb>
  );
}
