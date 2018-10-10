import * as ActionTypes from '../constants/actionTypes';
// import { test1 } from '../../utils.js';

const getInitialState = () => ({
  key: 'value'
});

export default (state = getInitialState(), action) => {
  console.log('Inside the reducer function');
  switch (action.type) {
    case ActionTypes.SAMPLE_ACTION:
      return Object.assign({}, state, { key: action.data });
    default:
      return state;
  }
};
