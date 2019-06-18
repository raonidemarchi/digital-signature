import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

const DocumentsList = React.lazy(() => import('./components/DocumentsList/DocumentsList'))
const DocumentDetails = React.lazy(() => import('./components/DocumentDetails/DocumentDetails'))

const Routes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={props => <DocumentsList {...props} />} />
        <Route exact path="/document/:hash" component={props => <DocumentDetails {...props} />} />
        <Redirect from="*" to="/" />
      </Switch>
    </Suspense>
  </Router>
)

export default Routes;