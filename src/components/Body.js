import React from 'react'
import {Text, View} from 'react-native'
import Counter from './Counter'
import CounterReset from './CounterReset'
import CounterMultiplier from './CounterMultiplier'
import ChamberRun from './ChamberRun'
import MyPicker from './MyPicker'



const Body = () => {
  const { textStyle, viewStyle } = styles;
  return(
      <View style={styles.containerStyle}>
      <Text style={textStyle}>Welcome to the Time Keeper </Text>
      <Counter/>
      <CounterReset/>
      <CounterMultiplier/>
      <ChamberRun/>
      </View>
  );
};

const styles = {
containerStyle: {
  borderWidth: 1,
  borderRadius: 2,
  borderColor: '#ddd',
  borderBottomWidth: 0.2,
  shadowColor: '#fff',
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 1,
  marginLeft: 5,
  marginRight: 5,
  marginTop: 10
  },

  bodySectionTextStyle: {
    fontSize: 16,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 20,
    paddingLeft: 15,
  //    paddingLeft: 20
    },
  textStyle: {
    color: '#151B8D',
    fontSize: 25,
    textAlign: 'center'
  }
};

export default Body;
