import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sampleAction } from '../../../redux/actions/index';
import View from './view';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <View {...this.props} />
      </div>
    );
  }
}

// give access to state from this component (access via props)
/* istanbul ignore next */
function mapStateToProps(state, ownProps) {
  // let referenceObject = Object.assign({}, state.base.fetchedData, { formData: state.base.formData, tab: state.base.tab });
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
