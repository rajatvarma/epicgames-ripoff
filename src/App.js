import React from 'react'
import GlobalStyle from './components/GlobalStyle';
import Home from './pages/Home'
import {Route, Switch} from 'react-router-dom'
import Nav from './components/Nav';
import Developers from './pages/Developers';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav />
      <Switch>
        <Route path={['/game/:id', '/']} exact>
          <Home />
        </Route>
        <Route path={['/developers/:id', '/developers']} exact>
          <Developers/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
