import React from 'react';
import {TextInput, View, Text} from 'react-native'

const Input = ({label, value, onChangeText, placeholder, isPassword}) => {

    const {inputStyle, labelStyle, containerStyle} = styles;

    return (
        <View style = {containerStyle}>
            <Text style = {labelStyle}>
                {label}
            </Text>
            <TextInput
                secureTextEntry = {isPassword}
                placeholder = {placeholder}
                autoCorrect = {false}
                style = {inputStyle} 
                value = {value}
                onChangeText = {onChangeText}
            /> 
        </View>
    );
}

const styles = {
    inputStyle : {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 7 //the amount of space it will have
    },
    labelStyle : {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1 //the amount of space it will have
    },
    containerStyle : {
        borderRadius: 10,
        height: 40,
        flex: 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#9aa8ba'
    }
}

export {Input};