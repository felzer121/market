import React from 'react';
import './style.scss'
import { Route, Switch } from "react-router-dom";
import { Home } from "../../page/Home";

export const Container = () => {
  return (
    <div className='container'>
      <div className='container__box'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
};