
import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View} from 'react-native';
import Header from './src/components/Header';
import Body from './src/components/Body';

export default class KymetaTimeKeeper extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Kymeta Time Keeper Aid'}/>
        <Body/>
      </View>
    );
  }
}


AppRegistry.registerComponent('KymetaTimeKeeper', () => KymetaTimeKeeper);
