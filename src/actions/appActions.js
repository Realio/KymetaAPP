import * as types from './actionTypes';

export function increment(amount = 1) {
  return {
    type: types.INCREMENT,
    amount
  };
}

export function resetCounter() {
  return {
    type: types.RESET_COUNTER
  };
}

export function multiplier(multiplier) {
  return {
    type: types.MULTIPLIER,
    multiplier: multiplier
  };
}

export function createRun(chamber, type, duration) {
  return {
    type: types.CREATE_RUN,
    chamber: chamber,
    runType: type,
    duration: duration
  };
}
