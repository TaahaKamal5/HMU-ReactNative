//import libraries
import React from 'react';
import { Image, View, Button, Text } from 'react-native';

//make the component
const goTo = () => (
    //Go to buying page
    <Text />
);

const DisplayImage = () => {
    const { viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Image source={{ 
                uri: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/M/RX/MRXJ2/MRXJ2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1551489675083' }} 
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
        justifyContent: 'center',
        alignItems: 'center',
    },
};

//render this component
export default DisplayImage;
