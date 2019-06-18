import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

const DocumentDetails = React.lazy(() => import('./components/DocumentDetails/DocumentDetails'))

const Routes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/document" component={props => <DocumentDetails {...props} />} />
        <Redirect from="*" to="/document" />
      </Switch>
    </Suspense>
  </Router>
)

export default Routes;