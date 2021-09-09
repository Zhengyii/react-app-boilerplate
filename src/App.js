import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import MapDemo from './pages/MapDemo'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/map" component={MapDemo} />
          <Redirect to={'/map'} />
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App
