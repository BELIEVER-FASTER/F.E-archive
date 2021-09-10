import { GithubOutlined, MediumWorkmarkOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import IMG from 'assets/img/pixeltrue-web-development.png';
import LayoutContainer from 'components/Common/Layout';

export default function Home(): JSX.Element {
  const info = () => {
    message.info('준비중입니다');
  };
  const goGH = () => {
    window.open('https://github.com/BELIEVER-FASTER');
  };
  return (
    <LayoutContainer>
      <div className="home">
        <img src={IMG} alt="Illustration by Pixeltrue from Ouch!" />
        <h1>Faster</h1>
        <h1>F.E Part archive</h1>
        <div className="btn_wrapper">
          <Button onClick={goGH} icon={<GithubOutlined />} block size="large">
            GitHub
          </Button>
          <Button onClick={info} icon={<MediumWorkmarkOutlined />} block size="large">
            Blog
          </Button>
        </div>
      </div>
    </LayoutContainer>
  );
}
