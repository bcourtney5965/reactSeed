import * as ActionTypes from '../constants/ActionTypes.js';

export function sampleAction(data) {
  console.log('scalloped potatoes:::::: inside sampleAction');
  return {
    type: ActionTypes.SAMPLE_ACTION,
    data: data
  };
}
