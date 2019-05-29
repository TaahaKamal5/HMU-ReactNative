import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({whenPressed, children}) => {
    return (
        <TouchableOpacity onPress = {whenPressed} style = {styles.buttonStyle}>
            <Text style = {styles.textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1, //100% horizontally
        alignSelf: 'stretch', //stretch to fill the container
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
}

export default Button;