
import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,Alert,TouchableHighlight} from 'react-native';
import Header from './src/components/Header';
import Body from './src/components/Body';
import MyPicker from './src/components/MyPicker';

var CHAMBERS = ['Brick', 'Ellie', 'Hertz']
var alertMessage = 'I hate Khoa';

export default class KymetaAPP extends Component {
  render() {
    return (
      <View style= {{flex: 1}}>
        <Header headerText={'Kymeta Time Keeper Aid'}/>
        <Text> {CHAMBERS[2]} </Text>
        <Body/>
        <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            'WARNING',
            alertMessage,
          )}>
          <View style={styles.button}>
            <Text>Click here for important information</Text>
          </View>
        </TouchableHighlight>
        <MyPicker/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10,
  },
});

AppRegistry.registerComponent('KymetaAPP', () => KymetaAPP);
