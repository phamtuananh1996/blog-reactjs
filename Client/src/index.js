import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './views/layout';
import Post from './views/post';
import Home from './views/home';
import PostDetail from './views/post_detail';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import './css/import'
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import allReducers from './store/reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
let store = createStore(allReducers);
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store= {store} >
  <Router>
    <Layout>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/post" component={Post} />
        <Route path="/post-detail/:id" component={PostDetail} />
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
    </Layout>
  </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
