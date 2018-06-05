import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  defaultParams() {
    let closure = (num=3) => num;
    return closure();
  }

  arrayIncludes() {
    var arrayIncludesTest = () => {
      let nums = [1, 2, 3];
      return nums.includes(2);
    }
    return arrayIncludesTest();
  }

  render() {
    return (
      <div>Hello {this.props.name}
        <div className={this.defaultParams() === 3 ? '' : 'babel-error'}>Default parameters should equal 3... actual: {this.defaultParams()}</div>
        <div className={this.arrayIncludes() ? '' : 'babel-error'}>Array.prototype.includes works: {this.arrayIncludes().toString()}</div>
      </div>
    )
  }
}