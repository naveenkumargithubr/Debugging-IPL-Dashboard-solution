import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'

import './App.css'

const App = () => (
  // Routes should be wrapped with Switch component
  <Switch>
    {/* "exact" keyword should be added */}
    <Route exact path="/" component={Home} />
    {/* update colon ":" */}
    <Route path="/team-matches/:id" component={TeamMatches} />
    <Route component={NotFound} />
  </Switch>
)

export default App
