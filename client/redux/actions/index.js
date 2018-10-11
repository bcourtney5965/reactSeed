import * as ActionTypes from '../constants/actionTypes';

export function sampleAction(data) {
  console.log('Inside sampleAction');
  return {
    type: ActionTypes.SAMPLE_ACTION,
    data
  };
}
