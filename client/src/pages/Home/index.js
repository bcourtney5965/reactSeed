import React, { Component } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sampleAction } from '../../../redux/actions/index';
import View from './view.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    console.log('Inside handleOnClick!');
    const { sampleAction } = this.props;
    sampleAction('Yes!');
  }

  render() {
    return (
      <div>
        <View {...this.props} handleOnClick={this.handleOnClick} />
      </div>
    );
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
Home.propTypes = {
  sampleAction: PropTypes.func.isRequired
};

// give access to state from this component (access via props)
/* istanbul ignore next */
function mapStateToProps(state, ownProps) {
  return {
    value: state.key
  };
}

// give access to dispatch from this component (access via props)
/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    sampleAction: options => dispatch(sampleAction(options))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
