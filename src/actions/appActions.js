import * as types from './actionTypes';

export function increment() {
  console.log('creating increment action');
  return {
    type: types.INCREMENT
  };
}
