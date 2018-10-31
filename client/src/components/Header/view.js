import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class View extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className={'BorderBoxHeader'}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/subrouting">Subrouting example</Link>
        </li>
      </ul>
    );
  }
}

export default View;
