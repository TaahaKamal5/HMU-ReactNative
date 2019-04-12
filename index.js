//Import two libraries to make ReactNative components
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import DisplayImage from './src/components/body';

//Create components
const App = () => {
    return (
        <View>
            <Header />
            <DisplayImage />
        </View>
    ); 
};
 
//Rendering the component
AppRegistry.registerComponent('ReactNativeDemo', () => App);
