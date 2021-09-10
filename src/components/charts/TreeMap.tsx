import { ResponsiveTreeMap } from '@nivo/treemap';
import { Typography } from 'antd';

const data = {
  name: '동대문',
  color: 'hsl(241, 70%, 50%)',
  children: [
    {
      name: 'APM',
      color: 'hsl(186, 70%, 50%)',
      children: [
        {
          name: '브랜드1',
          color: 'hsl(63, 70%, 50%)',
          loc: 86157,
        },
        {
          name: '브랜드2',
          color: 'hsl(359, 70%, 50%)',
          loc: 119936,
        },
        {
          name: '브랜드3',
          color: 'hsl(165, 70%, 50%)',
          loc: 156608,
        },
        {
          name: '브랜드4',
          color: 'hsl(20, 70%, 50%)',
          loc: 189263,
        },
      ],
    },
    {
      name: 'DDP',
      color: 'hsl(21, 70%, 50%)',
      children: [
        {
          name: '왼쪽',
          color: 'hsl(220, 70%, 50%)',
          children: [
            {
              name: '1층',
              color: 'hsl(49, 70%, 50%)',
              children: [
                {
                  name: '브랜드1',
                  color: 'hsl(297, 70%, 50%)',
                  loc: 160989,
                },
                {
                  name: '브랜드2',
                  color: 'hsl(240, 70%, 50%)',
                  loc: 35458,
                },
                {
                  name: '브랜드3',
                  color: 'hsl(98, 70%, 50%)',
                  loc: 119512,
                },
              ],
            },
            {
              name: '브랜드4',
              color: 'hsl(302, 70%, 50%)',
              loc: 99190,
            },
            {
              name: '브랜드5',
              color: 'hsl(159, 70%, 50%)',
              loc: 58441,
            },
          ],
        },
        {
          name: '브랜드6',
          color: 'hsl(280, 70%, 50%)',
          loc: 192274,
        },
      ],
    },
    {
      name: '퀸즈스퀘어',
      color: 'hsl(19, 70%, 50%)',
      children: [
        {
          name: 'a브랜드',
          color: 'hsl(182, 70%, 50%)',
          loc: 146448,
        },
        {
          name: 'b브랜드',
          color: 'hsl(161, 70%, 50%)',
          loc: 124477,
        },
      ],
    },
    {
      name: '맥스타일',
      color: 'hsl(324, 70%, 50%)',
      children: [
        {
          name: 'randomize',
          color: 'hsl(260, 70%, 50%)',
          loc: 63699,
        },
        {
          name: 'resetClock',
          color: 'hsl(61, 70%, 50%)',
          loc: 51122,
        },
        {
          name: 'noop',
          color: 'hsl(348, 70%, 50%)',
          loc: 141425,
        },
        {
          name: 'tick',
          color: 'hsl(101, 70%, 50%)',
          loc: 146543,
        },
        {
          name: 'forceGC',
          color: 'hsl(187, 70%, 50%)',
          loc: 6865,
        },
        {
          name: 'stackTrace',
          color: 'hsl(201, 70%, 50%)',
          loc: 110727,
        },
        {
          name: 'dbg',
          color: 'hsl(231, 70%, 50%)',
          loc: 181181,
        },
      ],
    },
  ],
};

export default function TreeMap(): JSX.Element {
  return (
    <div style={{ height: '500px' }}>
      <Typography.Title level={2}>트리뷰 차트</Typography.Title>
      <Typography.Text>
        서버 리뉴얼시에 상가별 혹은 브랜드별 상품량등의 비중을 볼때
      </Typography.Text>
      <ResponsiveTreeMap
        data={data}
        identity="name"
        value="loc"
        valueFormat=".02s"
        innerPadding={4}
        outerPadding={5}
        margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
        labelSkipSize={1}
        labelTextColor="#fff"
        label={function (e) {
          return e.id + ' / ' + e.formattedValue;
        }}
        parentLabelTextColor={{ from: 'color', modifiers: [['darker', 2.5]] }}
        colors={{ scheme: 'paired' }}
        borderColor={{ from: 'color', modifiers: [['darker', 0.1]] }}
        animate={true}
      />
    </div>
  );
}
