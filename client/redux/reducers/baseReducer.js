import * as ActionTypes from '../constants/actionTypes.js';
// import * as _ from 'lodash';
// import GeneralUtils from '../../utils/GeneralUtils';

// export
const getInitialState = () => ({
  key: 'value'
});

export default (state = getInitialState(), action) => {
  console.log('scalloped potatoes::: inside the reducer function');
  switch (action.type) {
    case ActionTypes.SAMPLE_ACTION:
      return Object.assign({}, state, { key: action.data });
    default:
      return state;
  }
};
