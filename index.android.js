
import React, { Component } from 'react';
import {AppRegistry,AsyncStorage,StyleSheet,Text,View,Alert,TouchableHighlight} from 'react-native';
import Header from './src/components/Header';
import Body from './src/components/Body';
import MyPicker from './src/components/MyPicker';
import MyAlert from './src/components/MyAlert'

import { Provider } from 'react-redux';
import configureStore, {STORAGE_KEY} from './src/configureStore';

var CHAMBERS = ['Brick', 'Ellie', 'Hertz']
var alertMessage = 'I hate Khoa';

export default class KymetaAPP extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      store: null
    }
  }

  componentWillMount() {
    if (this.state.isLoading === false) {
      AsyncStorage.getItem(STORAGE_KEY, (err, result) => {
        if (err) {
          console.error(err);
        } else {
          result = JSON.parse(result);
        }
        this.setState({
          store: configureStore(result || {})
        });
      })

      this.setState({isLoading: true});
    }
  }

  render() {
    if (this.state.store) {
      return <Provider store={this.state.store}>
      <View style= {{flex: 1}}>
        <Header headerText={'Kymeta Time Keeper Aid'}/>
        <Text> {CHAMBERS[2]} </Text>
        <Body/>
        <MyAlert/>
        <MyPicker/>
      </View>
      </Provider>
    } else {
      return <View>
        <Text>Loading...</Text>
      </View>
    }
  }
}


AppRegistry.registerComponent('KymetaTimeKeeper', () => KymetaAPP);
