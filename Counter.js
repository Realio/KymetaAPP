import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import RunPicker from './RunPicker' //necessary?

import {bindActionCreators} from 'redux';
import * as appActions from '../actions/appActions';
import { connect } from 'react-redux';

const Counter = (props) => {
  const {counter, dispatch} = props;

  return (
    <TouchableOpacity onPress={() => dispatch(appActions.increment())}>
      <View>
        <Text>{counter}</Text>
      </View>
    </TouchableOpacity>
  );
};


const styles = {
};

export default connect(
  (state) => {
    // this modifies the properties being passed to Counter to add
    // the counter variable from redux state
    let {counter} = state.app;

    return {
      counter
    }
  },
  (dispatch) => {
    // this modifies the properties being passed to Counter to add a dispatch method for redux
    return {
      dispatch
    }
  }
)(Counter);
