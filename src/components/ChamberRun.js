import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import RunPicker from './RunPicker' // necessary?

import {bindActionCreators} from 'redux';
import * as appActions from '../actions/appActions';
import { connect } from 'react-redux';

const ChamberRun = (props) => {
  const {dispatch} = props;

  return (
    <TouchableOpacity onPress={() => {
      let action = appActions.createRun();
      console.log('dispatching', action);
      dispatch(action);
    }}>
      <View>
        <RunPicker/>
      </View>
    </TouchableOpacity>
  );
};


const styles = {
};

export default connect(
  (state) => {
    let {counter} = state.app;

    return {}
  },
  (dispatch) => {
    // this modifies the properties being passed to Counter to add a dispatch method for redux
    return {
      dispatch
    }
  }
)(ChamberRun);
