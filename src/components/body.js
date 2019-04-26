//import libraries
import React from 'react';
import { Image, View, Button, Text } from 'react-native';

//make the component
const goTo = () => (
    //Go to buying page
    <Text />
);

const DisplayImage = () => {
    const { textStyle,viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style = {textStyle}>
                More powerful, more colorful
            </Text>
            <Image source={{ 
                uri: 'https://www.apple.com/v/home/ee/images/heroes/watch-series-4/series_4__b539g9eyf22u_medium_2x.jpg' }} 
                style={{ width: 400, height: 400 }} 
            /> 
            <Button 
            onPress={goTo}
            title="Buy Now"
            backgroundColor="#42a1ec"
            />  
        </View> 
    );  
};

const styles = {
    viewStyle: {
        backgroundColor: '#FAFAFA',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        paddingTop: 30,
        fontSize: 20
    }
};

//render this component
export default DisplayImage;
