import React from 'react';
import { CalendarTooltipProps, ResponsiveCalendar } from '@nivo/calendar';
import { Typography } from 'antd';

const data = [
  {
    value: 150,
    day: '2021-01-26',
  },
  {
    value: 243,
    day: '2021-11-01',
  },
  {
    value: 136,
    day: '2021-03-08',
  },
  {
    value: 253,
    day: '2021-04-13',
  },
  {
    value: 334,
    day: '2021-03-10',
  },
  {
    value: 103,
    day: '2021-12-20',
  },
  {
    value: 363,
    day: '2021-05-11',
  },
  {
    value: 141,
    day: '2021-11-12',
  },
  {
    value: 246,
    day: '2021-07-22',
  },
  {
    value: 292,
    day: '2021-03-11',
  },
  {
    value: 358,
    day: '2021-07-30',
  },
  {
    value: 99,
    day: '2021-04-22',
  },
  {
    value: 184,
    day: '2021-05-26',
  },
  {
    value: 178,
    day: '2021-06-26',
  },
  {
    value: 387,
    day: '2021-05-09',
  },
  {
    value: 271,
    day: '2021-04-11',
  },
  {
    value: 379,
    day: '2021-04-21',
  },
  {
    value: 58,
    day: '2021-07-28',
  },
  {
    value: 293,
    day: '2021-01-30',
  },
  {
    value: 211,
    day: '2021-11-08',
  },
  {
    value: 398,
    day: '2021-07-14',
  },
  {
    value: 1,
    day: '2021-12-05',
  },
  {
    value: 295,
    day: '2021-10-30',
  },
  {
    value: 381,
    day: '2021-12-21',
  },
  {
    value: 119,
    day: '2021-08-30',
  },
  {
    value: 351,
    day: '2021-06-07',
  },
  {
    value: 128,
    day: '2021-02-26',
  },
  {
    value: 152,
    day: '2021-08-02',
  },
  {
    value: 268,
    day: '2021-08-04',
  },
  {
    value: 114,
    day: '2021-06-05',
  },
  {
    value: 162,
    day: '2021-09-24',
  },
  {
    value: 394,
    day: '2021-08-11',
  },
  {
    value: 223,
    day: '2021-01-13',
  },
  {
    value: 7,
    day: '2021-12-12',
  },
  {
    value: 381,
    day: '2021-06-09',
  },
  {
    value: 302,
    day: '2021-07-17',
  },
  {
    value: 381,
    day: '2021-04-05',
  },
  {
    value: 279,
    day: '2021-02-13',
  },
  {
    value: 3,
    day: '2021-06-09',
  },
  {
    value: 177,
    day: '2021-06-18',
  },
  {
    value: 118,
    day: '2021-11-08',
  },
];

export default function CalenderChart(): JSX.Element {
  return (
    <div style={{ height: '400px' }}>
      <Typography.Title level={2}>캘린더 차트</Typography.Title>
      <Typography.Text>
        서버 리뉴얼시에 브랜드별 상세관리 페이지 or 입점사측 관리 페이지에 활용하면 좋을
        것 같음 <br />
        입점사측 관리 페이지에서 이런게 있으면 깃헙 잔디관리처럼 뭔가 더 채우고 싶은
        욕구를 땡기게 할 수 있지 않을까
        <br />
        자발적 활성화 유도
      </Typography.Text>
      <ResponsiveCalendar
        data={data}
        from="2021-03-01"
        to="2021-12-12"
        emptyColor="#eeeeee"
        colors={['#e8eaf6', '#c5cae9', '#7986cb', '#3f51b5']}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        monthLegend={(_, m) => `${m + 1}월`}
        dayBorderWidth={4}
        dayBorderColor="#ffffff"
        tooltip={props => (
          <div
            style={{
              padding: '5px',
              background: '#fff',
              borderRadius: '3px',
              boxShadow: '0 0 3px #aaa',
            }}
          >
            <span style={{ fontWeight: 700 }}>{props.day}</span>
            <br />
            <span style={{ fontWeight: 600 }}>매출 :</span> {props.value}원
            <br />
            <span style={{ fontWeight: 600 }}>판매량 :</span> {props.value}
            <br />
            <span style={{ fontWeight: 600 }}>상품등록 :</span> {props.value}
          </div>
        )}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'row',
            translateY: 36,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: 'right-to-left',
          },
        ]}
      />
    </div>
  );
}
