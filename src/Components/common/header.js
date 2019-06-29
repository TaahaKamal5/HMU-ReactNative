//import 2 libraries
import React from 'react';
import { Text, View } from 'react-native';


//make the component
const Header = (props) => {
    const {viewStyle } = styles;

    return (
        <View style = {viewStyle}>
            <Text style = {props.textStyle}>
                {props.headerText}
            </Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100
    }
};


//make the component available to other parts of the app
//instead of rendering it
export {Header};
