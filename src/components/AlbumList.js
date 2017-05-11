import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
  state = {
    title: 'Fearless',
    artist: 'Taylor Swift',
    url: 'https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6',
    image: 'https://images-na.ssl-images-amazon.com/images/I/717DWgRftmL._SX522_.jpg',
    thumbnail_image: 'https://i.imgur.com/K3KJ3w4h.jpg',

  };



  render() {
    return (
      <ScrollView>
            selectedValue={this.state.selectedalbum}
             { this.state.AlbumList.map((album, idx) => <Item key={`album-${idx}`} label={album} value={album} />) }
      </ScrollView>
      );
  }
}

export default AlbumList;
