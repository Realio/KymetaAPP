import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import RunPicker from './RunPicker'
import {bindActionCreators} from 'redux';
import * as appActions from '../actions/appActions';
import { connect } from 'react-redux';


const MultiplyNumber = 2  //edit this to change your multiplier


const CounterMultiplier = (props) => {
  const {counter, dispatch} = props;

  return (
    <TouchableOpacity onPress={() => dispatch(appActions.multiplier(MultiplyNumber))}>
      <View>
        <Text>Multiply It</Text>
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
)(CounterMultiplier);
