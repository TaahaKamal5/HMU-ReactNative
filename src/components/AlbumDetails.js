import React from 'react';
import {View, Text, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
    //Here I should really "destructure" my repeated objects
    //but I have no idea what "destructuring" means so I'll 
    //keep it but I'll look into it later

    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} 
                        source={{uri: props.albums.thumbnail_image}} 
                    />
                </View>
                {/* The below View is for the two texts of the album */}
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>
                        {props.albums.title}
                    </Text>
                    <Text>
                        {props.albums.artist}
                    </Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={styles.artworkStyle} 
                    source={{uri: props.albums.image}}
                />
            </CardSection>
            <CardSection>
                <Button whenPressed = {() => Linking.openURL(props.albums.url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
}; 

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    artworkStyle: {
        height: 300,
        //This is to make a 100% horizontal image
        flex: 1,
        width: null
    }
}

export default AlbumDetail;