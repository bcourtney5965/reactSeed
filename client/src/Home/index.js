import React, { Component } from 'react';
import * as _ from 'lodash';
import './style.scss';
// import GeneralUtils from '../utils/GeneralUtils';
import { connect } from 'react-redux';
import { sampleAction } from '../../redux/actions/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    console.log('scalloped potatoes:::::: inside handleOnClick');
    const { sampleAction } = this.props;
    sampleAction('Lime Pie!');
  }

  render() {
    const { value } = this.props;
    return (
      <div className="DottedBoxHome">
        <h2>
          key:
          {value}
        </h2>
        <button onClick={this.handleOnClick}>button</button>
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
