import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetails'; //import the function from the component in the same file
import axios from 'axios';

class AlbumList extends Component {
    //Assigning an object, which has an empty array called albums, to the state attr
    state = {albums: [] };

    componentDidMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({albums: response.data})); //Setting the state attr to have another object with actual data in it
    }

    //The helper render method
    renderAlbums(){
        return this.state.albums.map(album => 
            //We're no longer showing Text but AlbumDetail instead
            //And to communicate between parent AlbumList to child AlbumDetail, we must use 'props'
            <AlbumDetail key = {album.title} albums={album}/>);
        //The "key" provides a check that ReactNative wants because it doesn't want to render the same object multiple times
    }

    render(){
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
         );
    }
}

export default AlbumList;