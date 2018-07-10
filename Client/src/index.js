import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './views/layout';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable'
import registerServiceWorker from './registerServiceWorker';
import './css/import'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './store/reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import Game from './views/game'

const sagaMiddleware = createSagaMiddleware()
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

const Loading = () => <div></div>
const Home = Loadable({ loader: () => import('./views/home'), loading: Loading })
const PostDetail = Loadable({ loader: () => import('./views/post_detail'), loading: Loading })
const Post = Loadable({ loader: () => import('./views/post'), loading: Loading })

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <Layout>
        <Switch>
          <section class="content">
            <Route path="/" component={Home} exact />
            <Route path="/post" component={Post} />
            <Route path="/post-detail/:id" component={PostDetail} />
            <Route path="/game" component={Game} />
            {/* <Route component={NotFoundPage} /> */}
          </section>
        </Switch>
      </Layout>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
