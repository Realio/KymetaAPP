
import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,Alert,TouchableHighlight} from 'react-native';
import Header from './src/components/Header';
import Body from './src/components/Body';
import MyPicker from './src/components/MyPicker';
import MyAlert from './src/components/MyAlert'

var CHAMBERS = ['Brick', 'Ellie', 'Hertz']
var alertMessage = 'I hate Khoa';

export default class KymetaAPP extends Component {
  render() {
    return (
      <View style= {{flex: 1}}>
        <Header headerText={'Kymeta Time Keeper Aid'}/>
        <Text> {CHAMBERS[2]} </Text>
        <Body/>
        <MyAlert/>
        <MyPicker/>
      </View>
    );
  }
}


AppRegistry.registerComponent('KymetaAPP', () => KymetaAPP);
