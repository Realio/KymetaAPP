import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,Alert,TouchableHighlight} from 'react-native';
import Body from './Body';
import Header from './Header';
import MyPicker from './MyPicker';

var CHAMBERS = ['Brick', 'Ellie', 'Hertz']
var alertMessage = 'I hate Khoa';

import { Provider } from 'react-redux';
import configureStore from '../configureStore';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
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
