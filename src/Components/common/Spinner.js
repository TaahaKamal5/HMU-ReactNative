import React from 'react';
import {View, ActivityIndicator} from 'react-native';

//pass in a {size} parameter to indicate the size of the spinner
const Spinner = ({ size }) => {
    return (
        <View style = {styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'}/> 
            {/* this logic means if size is not specified, the default is then "large" */}
        </View>
    );
}

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export {Spinner};