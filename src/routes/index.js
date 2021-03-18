import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../pages/app/App'
import NotFound from '../pages/NoteFound'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes
