<<<<<<< Updated upstream
import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import RunPicker from './RunPicker' // necessary?

import {bindActionCreators} from 'redux';
import * as appActions from '../actions/appActions';
import { connect } from 'react-redux';

const ChamberRun = (props) => {
  const {counter, dispatch} = props;

  return (
    <TouchableOpacity onPress={() => dispatch(appActions.CreateRun())}>
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
    // this modifies the properties being passed to Chamber? to add
    // the counter variable from redux state
    let {counter} = state.app;

    return {
      counter???????????????????????
    }
  },
  (dispatch) => {
    // this modifies the properties being passed to Counter to add a dispatch method for redux
    return {
      dispatch
    }
  }
)(Counter);
=======
import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import MyPicker from './MyPicker' // necessary?

import {bindActionCreators} from 'redux';
import * as appActions from '../actions/appActions';
import { connect } from 'react-redux';

const ChamberRun = (props) => {
  const {counter, dispatch} = props;

  return (
    <TouchableOpacity onPress={() => dispatch(appActions.createRun())}>
      <View>
        <MyPicker/>
      </View>
    </TouchableOpacity>
  );
};


const styles = {
};

export default connect(
  (state) => {
    // this modifies the properties being passed to Chamber?
    let {counter} = state.app;

    return {
      counter
    }
  },
  (dispatch) => {
    // send it out on its way
    return {}
  }
)(ChamberRun);
>>>>>>> Stashed changes
