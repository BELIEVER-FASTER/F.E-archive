import { Typography, Divider } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

const blockContent = `우리 개발팀은 어쩌고 저쩌고`;
export default function CodeConvention(): JSX.Element {
  return (
    <div>
      <Typography>
        <Title>Introduction</Title>
        <Paragraph>예시 예시</Paragraph>
        <Paragraph>
          그렇고 저렇고
          <Text strong>ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</Text>.
        </Paragraph>
        <Title level={2}>Guidelines and Resources</Title>
        <Paragraph>
          우리는 우와 리액트(<Text code>React</Text> and <Text code>Vue</Text>), to 우와
        </Paragraph>

        <Paragraph>
          <ul>
            <li>
              <Link href="">Principles</Link>
            </li>
            <li>
              <Link href="">Patterns</Link>
            </li>
            <li>
              <Link href="">Resource Download</Link>
            </li>
          </ul>
        </Paragraph>

        <Paragraph>
          Press <Text keyboard>Esc</Text> to exit...
        </Paragraph>

        <Divider />

        <Paragraph>
          <blockquote>{blockContent}</blockquote>
          <pre>{blockContent}</pre>
        </Paragraph>

        <Paragraph>
          <Text keyboard>Esc</Text>
        </Paragraph>
      </Typography>
      ,
    </div>
  );
}
