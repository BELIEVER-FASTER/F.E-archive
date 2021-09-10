import { Result } from 'antd';
import React from 'react';
import { useLocation } from 'react-router';

export default function NotFound(): JSX.Element {
  const location = useLocation();
  console.log(location.pathname.split('/')[2]);
  return (
    <div className="container__not-found">
      <Result
        status="404"
        title="아직 글이 없어요"
        subTitle={`${location.pathname
          .split('/')[2]
          .toUpperCase()}가 조금더 열심히 일할 때까지 기다려주세요!`}
      />
    </div>
  );
}
