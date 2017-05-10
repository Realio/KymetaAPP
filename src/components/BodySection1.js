import React from 'react'
import {Text, View} from 'react-native'
import ChamberPicker from './ChamberPicker'

const BodySection1 = () => {
  return (
    <View>
    <ChamberPicker/>
    </View>
  );
};


const styles = {
containerStyle: {
  borderColor: '#ddd',
  padding: 5,
  backgroundColor: '#003f77',
  justifyContent: 'flex-start',
  flexDirection: 'row',
  borderBottomWidth: 1,
  position: 'relative'
  }
};

export default BodySection1;
