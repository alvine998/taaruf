import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import normalize from 'react-native-normalize';
import { asset1, logo, lovers, wallpaper } from '../../assets';

const Intro = (props) => {

    const slides = [
        {
            key: 1,
            title: 'Title 1',
            text: `Ta'aruf membantu mencari pasangan untuk anda`,
            image: lovers,
            backgroundColor: '#fc77a3',
        },
        {
            key: 2,
            title: 'Title 2',
            text: 'Menentukan lokasi yang diinginkan, dan menetukan calon pasangan yang sesuai',
            image: asset1,
            backgroundColor: '#fff',
        },
    ];

    const [showRealApp, setShowRealApp] = useState(false);

    const renderItem = ({ item }) => {
        return (
            <View style={item.key == 1 ? styles.background : { backgroundColor: "#fff", height: "100%" }}>
                {/* <Text style>{item.title}</Text> */}
                <View style={{ justifyContent: "center", alignItems: "center", paddingTop: normalize(130) }}>
                    <Image source={item.image} style={item.key == 1 ? styles.imgSize : null} />
                </View>
                <View style={item.key == 1 ? {paddingLeft:normalize(50), paddingRight:normalize(50)} : {paddingLeft:normalize(40), paddingRight:normalize(40)}}>
                    <Text style={item.key == 1 ? { textAlign: "center", fontSize: normalize(24), color: "white" } : { textAlign: "center", fontSize: normalize(24), color:"#3cb4f4" }}>{item.text}</Text>
                </View>
            </View>
        );
    }

    const renderDone = () => {
        return (
            <View>
                <Text style={{ color: "black", fontSize: normalize(20) }}>Done</Text>
            </View>
        )
    }

    return (
        <AppIntroSlider renderItem={renderItem} data={slides} onDone={() => props.navigation.navigate("login")} renderDoneButton={renderDone} />
    )
}

export default Intro;

const styles = StyleSheet.create({
    background: {
        height: '100%',
        backgroundColor: "#fc77a3",

    },
    imgSize: {
        width: normalize(250),
        height: normalize(200)
    },
    objCenter: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text1: {
        fontSize: normalize(18),
        textAlign: "center"
    },
    dot1: {
        width: normalize(15),
        height: normalize(15),
        borderRadius: 15,
        backgroundColor: "#fcd206"
    },
    dot2: {
        width: normalize(15),
        height: normalize(15),
        borderRadius: 15,
        backgroundColor: "#dfdfdf",
        marginLeft: normalize(10)
    }
})