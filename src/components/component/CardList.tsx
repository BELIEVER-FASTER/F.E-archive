import React from 'react';
import { Card, Col, Row } from 'antd';

export default function CardList(): JSX.Element {
  return (
    <div className="site-card-wrapper">
      <Row gutter={50}>
        <Col span={6}>
          <Card title="Card title" bordered headStyle={{ fontWeight: 700 }}>
            Card content
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Card title" bordered headStyle={{ fontWeight: 700 }}>
            Card content
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Card title" bordered headStyle={{ fontWeight: 700 }}>
            Card content
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Card title" bordered headStyle={{ fontWeight: 700 }}>
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  );
}
