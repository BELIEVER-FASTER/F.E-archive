import { Avatar, Badge, Typography } from 'antd';
import React from 'react';

export default function Badges(): JSX.Element {
  return (
    <div>
      <Typography.Title level={2}>뱃지</Typography.Title>
      <Typography.Text>확인해야 하는 상품 갯수</Typography.Text>
      <br /> <br />
      <Badge count={5} status="processing">
        <Avatar shape="circle" size="large" />
      </Badge>
    </div>
  );
}
