import React, { Suspense } from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

const DocumentsList = React.lazy(() => import('./components/DocumentsList/DocumentsList'))
const DocumentDetails = React.lazy(() => import('./components/DocumentDetails/DocumentDetails'))

const Routes = () => (
  <Router>
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route exact path="/documents/:menu" component={props => <DocumentsList {...props} />} />
        <Route exact path="/document/detail/:hash" component={props => <DocumentDetails {...props} />} />
        <Redirect from="*" to="/documents/all" />
      </Switch>
    </Suspense>
  </Router>
)

export default Routes;