import * as types from '../actions/actionTypes';

const initialState = {
  counter: 5,
  chamber: 'Choose Chamber',
  type: 'Choose Type',
  duration: 'Choose Duration'
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
        counter: state.counter + action.amount
      };

    case types.RESETCOUNTER:
      console.log('resetting');
      //resetting my counter object back to initial value
      return {
        ...state,
        counter: initialState.counter
      };

    case types.MULTIPLIER:
      console.log('they multiplying yo');
      //trying to multiply some shizz
      return {
        ...state,
        counter: state.counter * action.multiplier
      };

    case types.CREATE_RUN:
      console.log('executing my dropdown data');
        //attempting to parse data from dropdowns
      return {
        ...state,
        counter: action.duration
      };
    case undefined:
      return {...initialState, state};

    default:
      return state;
  }
}
