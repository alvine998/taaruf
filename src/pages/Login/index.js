import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import { asset2 } from '../../assets';

const Login = (props) => {
    return (
        <View>
            <View style={styles.background}>
                <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                    <Image source={asset2} style={styles.imgSize} />

                    <View>
                        <View style={styles.tube}>
                            <TextInput placeholder='No Handphone' placeholderTextColor={"#fe669d"} keyboardType='number-pad' maxLength={12} style={{ color: "#fe669d" }} />
                        </View>

                        <View style={{ paddingTop: normalize(20) }}>
                            <TouchableOpacity style={styles.btnMasuk} onPress={()=>props.navigation.navigate("home")}>
                                <Text style={styles.text1}>Masuk</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ paddingTop: normalize(10) }}>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <Text style={styles.text2}>Belum punya akun? </Text>
                                <TouchableOpacity onPress={()=>props.navigation.navigate("register")}>
                                    <Text style={styles.text3}>Daftar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    imgSize: {
        width: normalize(200),
        height: normalize(120),
    },
    background: {
        height: "100%",
        backgroundColor: "#fff"
    },
    tube: {
        width: normalize(280),
        borderRadius: 20,
        height: normalize(40),
        justifyContent: "center",
        borderWidth: 1,
        borderColor:"#dfdfdf",
        paddingLeft: normalize(10),
        marginTop: normalize(50)
    },
    btnMasuk: {
        width: normalize(280),
        borderRadius: 20,
        height: normalize(40),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fcd304"
    },
    text1: {
        fontSize: normalize(20),
        color:"white"
    },
    text2: {
        fontSize: normalize(15),
        fontWeight: "bold",
        color: "black",
    },
    text3: {
        fontSize: normalize(15),
        fontWeight: "bold",
        color: "#fe669d",
    }
})