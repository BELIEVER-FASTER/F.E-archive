import { Route } from 'react-router';
import './App.scss';
import Home from './components/Home';
import Resource from 'pages/Resource';

function App(): JSX.Element {
  return (
    <>
      <Route path="/" component={Home} exact />
      <Route path="/resource" component={Resource} />
    </>
  );
}

export default App;
