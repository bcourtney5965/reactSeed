import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';
import Babel from './src/components/Babel/index.js';
import Home from './src/pages/Home/index.js';
import { Provider } from 'react-redux';
import RootReducer from '../client/redux/reducers/baseReducer.js';

import Header from './src/components/Header/index.js';
import Subrouting from './src/pages/Subrouting/index.js';

/* eslint-disable no-underscore-dangle */
var initStore = createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

const App = () => (
  <Provider store={initStore}>
    <Router>
      <div>
        <Header />
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/subrouting" component={Subrouting} />
      </div>
    </Router>
  </Provider>
);

export default App;
