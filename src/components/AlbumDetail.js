import React from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
    const { title, artist, thumbnail_image, image, url } = props.album;
    const {
        headerTextContainer,
        thumbnailContainerStyle,
        headerTextStyle,
        bodyImageStyle } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerTextContainer}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={bodyImageStyle}
                    source={{ uri: image }}
                />
            </CardSection>
            <CardSection>
                <Button onPress={ () => Linking.openURL(url) }>Buy Now</Button>
            </CardSection>
        </Card>
    );
}


const styles = StyleSheet.create({
    headerTextContainer: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    headerTextStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    bodyImageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
});
export default AlbumDetail;