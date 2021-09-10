import { Steps } from 'antd';
import React from 'react';

export default function Step(): JSX.Element {
  return (
    <div>
      <Steps current={2}>
        <Steps.Step
          title="상품 검토"
          subTitle="2021-09-09 T08:33:30"
          description="상품을 등록하였습니다."
        />
        <Steps.Step
          title="판매중"
          subTitle="2021-09-09 T08:33:30"
          description="판매중입니다."
        />
        <Steps.Step title="품절" subTitle="Left 00:00:08" description="품절되었습니다." />
        <Steps.Step
          title="판매중단"
          subTitle="2021-09-09 T08:33:30"
          description="판매가 중지되었습니다"
        />
      </Steps>
    </div>
  );
}
