import { GithubOutlined, MediumWorkmarkOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import IMG from 'assets/img/pixeltrue-idea.png';

export default function Home(): JSX.Element {
  const info = () => {
    message.info('준비중입니다');
  };
  const goGH = () => {
    window.open('https://github.com/BELIEVER-FASTER');
  };
  return (
    <div className="home">
      <img src={IMG} alt="Illustration by Pixeltrue from Ouch!" />
      <h1>Faster front-end 저장소</h1>
      <div className="btn_wrapper">
        <Button onClick={goGH} icon={<GithubOutlined />} block size="large">
          GitHub
        </Button>
        <Button onClick={info} icon={<MediumWorkmarkOutlined />} block size="large">
          Blog
        </Button>
      </div>
    </div>
  );
}
