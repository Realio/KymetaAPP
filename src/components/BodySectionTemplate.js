import React from 'react'
import {Text, View} from 'react-native'
import Button from './Button';

const BodySectionTemplate = (props) => {
  return (
    <View style = {styles.containerStyle}>
    <Text>{props.BodySectionTemplateText}</Text>
    <Button/>
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

export default BodySectionTemplate;
