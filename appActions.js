import * as types from './actionTypes';

export function increment(amount = 1) {
  console.log('creating increment action');
  return {
  type: types.INCREMENT,
  amount
  };
}

export function resetcounter() {
  console.log('hard reset on counter');
  return {
    type: types.RESETCOUNTER
  };
}

export function multiplier(multiplier) {
  console.log('trying to multiply some shit');
  return {
    type: types.MULTIPLIER,
    multiplier: multiplier
  };
}

export function createRun(chamber, type, duration) {
  return {
    type: types.CREATE_RUN,
    chamber: chamber,
    type: type,
    duration: duration
  };
}
