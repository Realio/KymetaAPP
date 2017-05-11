import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')  //pulling data from website - need to make my own list?
        .then(response => this.setState({ albums: response.data}));  //response.data is the array of objects
  }

  renderAlbums () {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album}/>
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
      );
  }
}

export default AlbumList;
