import React from 'react';

function sum(a, b) {
  return a + b;
}

class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        {this.props.title}
      </div>
    )
  }
} 

export {Foo, sum};