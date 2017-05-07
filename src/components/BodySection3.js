import React from 'react'
import {Text, View,Picker} from 'react-native'
import StartButton from './StartButton';


const BodySection3 = (props) => {
  return (
    <View style = {styles.containerStyle}>
    <Text style={styles.bodySectionTextStyle}>Click When Ready</Text>
    <StartButton/>
    </View>
  );
};


const styles = {
containerStyle: {
  borderColor: '#ddd',
  padding: 5,
  backgroundColor: '#307D7E',
  justifyContent: 'flex-start',
//  alignItems: 'center',
  flexDirection: 'row',
  borderBottomWidth: 1,
  position: 'relative'
  },
bodySectionTextStyle: {
  fontSize: 16,
  paddingTop: 15,
  paddingBottom: 15,
  paddingRight: 20,
  paddingLeft: 15,
//    paddingLeft: 20
  }
};

export default BodySection3;
