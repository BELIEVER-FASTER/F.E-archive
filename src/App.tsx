import { Route } from 'react-router';
import './App.scss';
import Home from './components/Home';
import Resource from 'pages/Resource';
import Document from 'pages/Document';

function App(): JSX.Element {
  return (
    <>
      <Route path="/" component={Home} exact />
      <Route path="/resource" component={Resource} />
      <Route path="/document" component={Document} />
    </>
  );
}

export default App;
