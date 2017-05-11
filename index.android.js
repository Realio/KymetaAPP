
import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View} from 'react-native';
import Header from './src/components/Header';
import Body from './src/components/Body';
import AlbumList from './src/components/AlbumList';


export default class KymetaTimeKeeper extends Component {
  render() {
    return (
      <View style= {{flex: 1}}>
        <Header headerText={'Kymeta Time Keeper Aid'}/>
        <AlbumList/>
      </View>
    );
  }
}


AppRegistry.registerComponent('KymetaTimeKeeper', () => KymetaTimeKeeper);
