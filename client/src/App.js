import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import Homepage from './pages/home'
import Article from './pages/article';
import Portfolio from './pages/portfolio';
import ArticleShow from './components/article/articleShow';
import AddPortfolio from './components/portfolio/portfolioCreate';
import firebase from 'firebase';
import "./App.css";
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyC-M8NX7yIgq5HHxIEUuWWZC_er1DE5zio",
      authDomain: "shikwan-portfolio-a4462.firebaseapp.com",
      databaseURL: "https://shikwan-portfolio-a4462.firebaseio.com",
      projectId: "shikwan-portfolio-a4462",
      storageBucket: "shikwan-portfolio-a4462.appspot.com",
      messagingSenderId: "982192893247"
    };
    firebase.initializeApp(config);
  }
  render() {
    
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/article/:id' component={ArticleShow} />
            <Route exact path='/article' component={Article} />
            <Route exact path='/portfolio/add' component={AddPortfolio} />
            <Route exact path='/portfolio' component={Portfolio} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
