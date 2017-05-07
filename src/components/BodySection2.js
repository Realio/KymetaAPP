import React from 'react'
import {Text, View} from 'react-native'
import RunPicker from './RunPicker'

const BodySection2 = (props) => {
  return (
    <View>
    <RunPicker/>
    </View>
  );
};


const styles = {
containerStyle: {
  borderColor: '#ddd',
  padding: 5,
  backgroundColor: '#99C68E',
  justifyContent: 'flex-start',
  flexDirection: 'row',
  borderBottomWidth: 1,
  position: 'relative'
  }
};

export default BodySection2;
