import React from 'react';
import { Table, Space } from 'antd';
import { BulbOutlined } from '@ant-design/icons';

const columns = [
  {
    title: '브랜드명',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: '상품명',
    dataIndex: 'age',
    key: 'age',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: '카테고리',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '등록일',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: '상태',
    key: 'state',
    dataIndex: 'state',
  },
  {
    title: '확인여부',
    key: 'action',
    render: (
      text: string,
      record: {
        key: string;
        name: string;
        age: string;
        address: string;
        tags: string;
        state: string;
        isUpdated: boolean;
      }
    ) => (
      <Space size="small">
        <a>
          {record.isUpdated ? (
            <>
              '확인필요'
              <BulbOutlined />
            </>
          ) : (
            ''
          )}
        </a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'a브랜드',
    age: '몰라요',
    address: '여성상의 > 반팔티셔츠',
    tags: '2021년 9월 9월 19시 04분',
    state: '판매중',
    isUpdated: true,
  },
  {
    key: '2',
    name: 'b브랜드',
    age: '몰라요',
    address: '여성상의 > 셔츠 /블라우스',
    tags: '2021년 9월 9월 19시 04분',
    state: '판매중',
    isUpdated: false,
  },
  {
    key: '3',
    name: 'c브랜드',
    age: '몰라요',
    address: '여성상의 > 셔츠 /블라우스',
    tags: '2021년 9월 9월 19시 04분',
    state: '판매중',
    isUpdated: false,
  },
];
export default function Tables(): JSX.Element {
  return <Table columns={columns} dataSource={data} />;
}
