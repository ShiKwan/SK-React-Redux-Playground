import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import Homepage from './pages/home'
import Article from './pages/article';
import "./App.css";

class App extends Component {
  render() {
    
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/article' component={Article} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
