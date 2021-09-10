import IMG from 'assets/img/pixeltrue-idea.png';
import { Typography, Tooltip } from 'antd';

export default function Home(): JSX.Element {
  return (
    <div className="home res_home">
      <img src={IMG} alt="Illustration by Pixeltrue from Ouch!" />
      <h1>Front-End Resources</h1>
      <Tooltip title="인간적인 반복 성스러운 재귀">
        <Typography.Title level={5}>
          To iterate is human, to recurse divine.
        </Typography.Title>
        <Typography.Text>-Seymour Roger Cray-</Typography.Text>
      </Tooltip>
      <div className="btn_wrapper"></div>
    </div>
  );
}
