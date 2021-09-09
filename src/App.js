import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './pages/User/Login'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Redirect to={'/login'} />
        </Switch>
        {/* <div className="App">
          <h1>This is React App.</h1>
        </div>
        <div className="App-other">
          <h1>This is React App-ohter.</h1>
        </div> */}
      </HashRouter>
    </div>
  )
}

export default App
