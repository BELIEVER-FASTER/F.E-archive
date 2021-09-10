import { ResponsiveLine } from '@nivo/line';
import { Typography } from 'antd';

const data = [
  {
    id: 'japan',
    color: 'hsl(126, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 240,
      },
      {
        x: 'helicopter',
        y: 194,
      },
      {
        x: 'boat',
        y: 255,
      },
      {
        x: 'train',
        y: 135,
      },
      {
        x: 'subway',
        y: 61,
      },
      {
        x: 'bus',
        y: 255,
      },
      {
        x: 'car',
        y: 30,
      },
      {
        x: 'moto',
        y: 11,
      },
      {
        x: 'bicycle',
        y: 73,
      },
      {
        x: 'horse',
        y: 129,
      },
      {
        x: 'skateboard',
        y: 93,
      },
      {
        x: 'others',
        y: 289,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(262, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 25,
      },
      {
        x: 'helicopter',
        y: 188,
      },
      {
        x: 'boat',
        y: 101,
      },
      {
        x: 'train',
        y: 154,
      },
      {
        x: 'subway',
        y: 294,
      },
      {
        x: 'bus',
        y: 166,
      },
      {
        x: 'car',
        y: 150,
      },
      {
        x: 'moto',
        y: 210,
      },
      {
        x: 'bicycle',
        y: 74,
      },
      {
        x: 'horse',
        y: 10,
      },
      {
        x: 'skateboard',
        y: 245,
      },
      {
        x: 'others',
        y: 5,
      },
    ],
  },
];

export default function LineChart(): JSX.Element {
  return (
    <div style={{ height: '500px' }}>
      <Typography.Title level={2}>라인 차트</Typography.Title>
      <Typography.Text>입점사수 or 상품수 추이를 볼때</Typography.Text>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 80, left: 60 }}
        curve="natural"
        axisTop={null}
        axisRight={null}
        lineWidth={3}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        colors={{ scheme: 'set1' }}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}
