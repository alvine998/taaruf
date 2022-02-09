import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import { asset1, logo, lovers, wallpaper } from '../../assets';

const Intro2 = (props) => (
    <View>
        <ScrollView style={styles.background}>
            <View style={styles.objCenter}>
                <Image source={asset1} style={styles.imgSize} />
                <Text style={styles.text1}>
                    
                </Text>

                <View style={{ paddingTop: normalize(100), flexDirection: "row" }}>
                    <View style={styles.dot2}>

                    </View>
                    <View style={styles.dot1}>

                    </View>
                </View>
            </View>
            <View style={{alignItems: "flex-end", justifyContent: "center", marginTop:normalize(20), marginRight:normalize(20) }}>
                <TouchableOpacity style={styles.btnLanjut} onPress={()=>props.navigation.navigate("login")}>
                    <Text style={styles.text2}>Lanjut</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
);

export default Intro2;

const styles = StyleSheet.create({
    background: {
        height: '100%',
        backgroundColor: "#fff",

    },
    imgSize: {
        width: normalize(250),
        height: normalize(250),
        marginTop:normalize(50)
    },
    objCenter: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text1: {
        fontSize: normalize(22),
        textAlign: "center",
        color: "#3cb4f4",
        marginTop: normalize(50)
    },
    text2: {
        fontSize: normalize(22),
        textAlign: "center",
        color: "#fff",
    },
    dot1: {
        width: normalize(15),
        height: normalize(15),
        borderRadius: 15,
        backgroundColor: "#fcd206",
        marginLeft: normalize(10)
    },
    dot2: {
        width: normalize(15),
        height: normalize(15),
        borderRadius: 15,
        backgroundColor: "#dfdfdf",
    },
    btnLanjut: {
        width: normalize(150),
        height: normalize(40),
        borderRadius: 20,
        backgroundColor: "#fe669d",
        alignItems:"center",
        justifyContent:"center"
    }
})