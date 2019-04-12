//import 2 libraries
import React from 'react';
import { Text, View } from 'react-native';


//make the component
const Header = () => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Apple Airpods</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 70,
        borderBottomWidth: 0.5,
        borderBottomColor: '#000',
        paddingBottom: 20
    },
    textStyle: {
        fontSize: 30
    }
};


//make the component available to other parts of the app
//instead of rendering it
export default Header;
