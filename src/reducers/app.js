import * as types from '../actions/actionTypes';

const initialState = {
  counter: 0
};

export default function handleAction(state = initialState, action = {}) {
  switch (action.type) {
    // handle incrementing of the counter
    case types.INCREMENT:
      console.log('incrementing');
      // this return a new object with all of the vals from state and overrides
      // counter with a new value
      return {
        ...state,
        counter: state.counter + 1
      };

    default:
      return state;
  }
}
