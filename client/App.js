import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';
import Babel from './src/Babel/index.js';
import Topics from './src/Topics/index.js';
import Home from './src/Home/index.js';
import { Provider } from 'react-redux';
import RootReducer from '../client/redux/reducers/baseReducer.js';

/* eslint-disable no-underscore-dangle */
var initStore = createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

const App = () => (
  <Provider store={initStore}>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/babel">Babel</Link>
          </li>
          <li>
            <Link to="/topics">Subrouting example</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/babel" component={Babel} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  </Provider>
);

export default App;
