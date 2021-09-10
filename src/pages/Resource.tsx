import LineChart from 'components/charts/LineChart';
import RoundChart from 'components/charts/RoundChart';
import TreeMap from 'components/charts/TreeMap';
import Table from 'components/component/Table';
import CardList from 'components/component/CardList';
import Step from 'components/component/Step';
import Badge from 'components/component/Badge';
import CalenderChart from 'components/charts/CalenderChart';
import ResourceLayout from 'components/Common/ResLayout';
import ResHome from 'components/ResHome';
import { Route } from 'react-router';

export default function Resource(): JSX.Element {
  return (
    <ResourceLayout>
      <Route path="/resource" component={ResHome} exact />
      <Route path="/resource/chart/line-chart" component={LineChart} />
      <Route path="/resource/chart/round-chart" component={RoundChart} />
      <Route path="/resource/chart/tree-chart" component={TreeMap} />
      <Route path="/resource/chart/calender-chart" component={CalenderChart} />

      <Route path="/resource/component/table" component={Table} />
      <Route path="/resource/component/card" component={CardList} />
      <Route path="/resource/component/step" component={Step} />
      <Route path="/resource/component/badge" component={Badge} />
    </ResourceLayout>
  );
}
