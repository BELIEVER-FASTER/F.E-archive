import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { Typography } from 'antd';

const data = [
  {
    id: '여성상의',
    label: '여성상의',
    value: 478,
  },
  {
    id: '모름',
    label: '모름',
    value: 252,
  },
  {
    id: 'DDP',
    label: 'DDP',
    value: 400,
  },
  {
    id: '??',
    label: '??',
    value: 535,
  },
  {
    id: '카테고리A',
    label: '카테고리A',
    value: 237,
  },
];

export default function RoundChart(): JSX.Element {
  return (
    <div style={{ height: '400px' }}>
      <Typography.Title level={2}>원형차트</Typography.Title>
      <Typography.Text>입점사수 비율 / </Typography.Text>
      <Typography.Text> 입점사별 활성상품비율 / </Typography.Text>
      <Typography.Text> 카테고리별 상품 분포 등을 볼때</Typography.Text>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        startAngle={60}
        sortByValue={true}
        innerRadius={0.55}
        padAngle={2}
        cornerRadius={6}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'paired' }}
        borderWidth={2}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsDiagonalLength={26}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabel="value"
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 4]] }}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#333',
            itemDirection: 'top-to-bottom',
            itemOpacity: 1,
            symbolSize: 14,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}
