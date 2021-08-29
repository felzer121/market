import React from 'react';
import './App.css';
import {Container} from "./components/Container";
import 'antd/dist/antd.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Auth from "./page/Auth";

function App() {
  return (
    <div className="App">
      <Router>
        <Container />
        <Switch>
          <Route exact path='/auth'>
            <Auth />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
