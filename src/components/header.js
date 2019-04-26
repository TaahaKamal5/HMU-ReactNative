//import 2 libraries
import React from 'react';
import { Image, View } from 'react-native';


//make the component
const Header = () => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Image source={{ 
                uri: 'https://www.apple.com/v/home/ee/images/logos/apple_watch_series_4_logo_hero__fegit8v4k2uu_medium_2x.jpg' }} 
                style={{ width: 145, height: 55 }} 
            /> 
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#FAFAFA',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 60
        // borderBottomWidth: 0.5,
        // borderBottomColor: '#000',
        // paddingBottom: 20
    },
    textStyle: {
        fontSize: 30
    }
};


//make the component available to other parts of the app
//instead of rendering it
export default Header;
