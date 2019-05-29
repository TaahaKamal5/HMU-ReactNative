//Import two libraries to make ReactNative components
import React, {Component}  from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import DisplayImage from './src/components/body';
import AlbumList from './src/components/AlbumList';

//Create components
const App = () => {
    return (
        <View>
            <Header headerText = {'Music'}/>
            <AlbumList />
        </View>
    ); 
};
 
//Rendering the component
AppRegistry.registerComponent('ReactNativeDemo', () => App);
