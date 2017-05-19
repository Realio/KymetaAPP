import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import RunPicker from './RunPicker'

import {bindActionCreators} from 'redux';
import * as appActions from '../actions/appActions';
import { connect } from 'react-redux';

const CounterReset = (props) => {
  const {counter, dispatch} = props;

  return (
    <TouchableOpacity onPress={() => dispatch(appActions.resetCounter())}>
      <View>
        <Text>Reset</Text>
      </View>
    </TouchableOpacity>
  );
};


const styles = {
};

export default connect(
  (state) => {
      let {counter} = state.app;
      return {
        counter
      }
    },
  (dispatch) => ({dispatch})
)(CounterReset);
