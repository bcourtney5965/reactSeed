import React, { Component } from 'react';
import './style.scss';
// import { test1 } from '../../utils.js';

class View extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value } = this.props;
    return (
      <div className="BorderBoxHome">
        <h1>Utilize the "Home" directory as a template (cp -R Home NewComponent) and add a route to get started</h1>
        <h2>Redux is hooked up too, click the button below to test</h2>
        <p>Redux hooked up:::: {value}</p>
        <button onClick={this.props.handleOnClick}>button</button>
      </div>
    );
  }
}

export default View;
