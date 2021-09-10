import IMG from 'assets/img/pixeltrue-newsletter.png';

export default function Home(): JSX.Element {
  return (
    <div className="home">
      <img src={IMG} alt="Illustration by Pixeltrue from Ouch!" />
      <h1>Document Clip</h1>
    </div>
  );
}
