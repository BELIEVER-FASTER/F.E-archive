import React from 'react';
import { Route, Router, Switch, useHistory } from 'react-router';
import DocLayout from '../components/Common/DocLayout';
import DocHome from 'components/DocHome';
import NotFound from 'components/NotFound';
import CodeConvention from 'components/guide/CodeConvention';

export default function Document(): JSX.Element {
  const history = useHistory();
  return (
    <DocLayout>
      <Router history={history}>
        <Switch>
          <Route path="/document" component={DocHome} exact />

          <Route path="/document/guide/:id" component={CodeConvention} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </DocLayout>
  );
}
