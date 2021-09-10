import { Route } from 'react-router';
import './App.scss';
import Home from './components/Home';
import LayoutContainer from './components/Common/Layout';
import LineChart from './components/charts/LineChart';
import RoundChart from './components/charts/RoundChart';
import TreeMap from './components/charts/TreeMap';
import Table from './components/component/Table';
import CardList from './components/component/CardList';
import Step from './components/component/Step';
import Badge from './components/component/Badge';
import CalenderChart from './components/charts/CalenderChart';

function App(): JSX.Element {
  return (
    <LayoutContainer>
      <Route path="/" component={Home} exact />

      <Route path="/chart/line-chart" component={LineChart} />
      <Route path="/chart/round-chart" component={RoundChart} />
      <Route path="/chart/tree-chart" component={TreeMap} />
      <Route path="/chart/calender-chart" component={CalenderChart} />

      <Route path="/component/table" component={Table} />
      <Route path="/component/card" component={CardList} />
      <Route path="/component/step" component={Step} />
      <Route path="/component/badge" component={Badge} />
    </LayoutContainer>
  );
}

export default App;
