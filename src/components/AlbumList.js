import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {    
    constructor(){
        super();
    }
    state = { albums: [] }

    componentWillMount() {
        this.fetchAlbums();
    }

    async fetchAlbums() {
        try {
            let response = await fetch(
                'https://rallycoding.herokuapp.com/api/music_albums'
            );
            let responseJson = await response.json();
            this.setState({ albums: responseJson })
        } catch (error) {
            console.error(error);
        }
    }

    renderAlbums() {
       return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album} />
       )
    }

    render() {
        console.log('albums', this.renderAlbums());
        return (
            <View>
            {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;