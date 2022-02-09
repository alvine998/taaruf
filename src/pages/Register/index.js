import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import normalize from 'react-native-normalize';
import { asset2, usrs } from '../../assets';

const Register = (props) => {
    return (
        <View>
            <View style={styles.background}>
                <View style={styles.center}>
                    <Image source={usrs} />
                    <View style={styles.padRegist}>
                        <View style={styles.tube}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <Icon type='font-awesome' name='user' color={"#fc77a3"} />
                                </View>
                                <TextInput placeholder='Nama' placeholderTextColor={"black"} style={{ color: "black", paddingLeft: normalize(10) }} />
                            </View>
                        </View>
                        <View style={styles.tube2}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <Icon type='font-awesome' name='map-marker' color={"#fc77a3"} />
                                </View>
                                <TextInput placeholder='Status' placeholderTextColor={"black"} style={{ color: "black", paddingLeft: normalize(10) }} />
                            </View>
                        </View>
                        <View style={styles.tube2}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <Icon type='font-awesome' name='transgender' color={"#fc77a3"} />
                                </View>
                                <TextInput placeholder='Jenis Kelamin' placeholderTextColor={"black"} style={{ color: "black", paddingLeft:normalize(10) }} />
                            </View>
                        </View>
                        <View style={styles.tube2}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <Icon type='font-awesome-5' name='calendar-alt' color={"#fc77a3"} />
                                </View>
                                <TextInput placeholder='Umur' maxLength={2} placeholderTextColor={"black"} style={{ color: "black", paddingLeft: normalize(10) }} />
                            </View>
                        </View>
                        <View style={styles.tube2}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <Icon type='font-awesome' name='suitcase' color={"#fc77a3"} />
                                </View>
                                <TextInput placeholder='Pekerjaan' placeholderTextColor={"black"} style={{ color: "black", paddingLeft: normalize(10) }} />
                            </View>
                        </View>
                        <View style={styles.tube2}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <Icon type='font-awesome-5' name='map-marked-alt' color={"#fc77a3"} />
                                </View>
                                <TextInput placeholder='Alamat' placeholderTextColor={"black"} style={{ color: "black", paddingLeft:normalize(10) }} />
                            </View>
                        </View>
                        <View style={{ paddingTop: 20 }}>
                            <TouchableOpacity style={styles.btnRegist} onPress={()=>props.navigation.navigate("login")}>
                                <Text style={styles.text1}>Daftar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Register;

const styles = StyleSheet.create({
    btnRegist: {
        width: '100%',
        backgroundColor: "#fc77a3",
        height: normalize(40),
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    text1: {
        fontSize: normalize(22),
        color: "white"
    },
    background: {
        height: '100%',
        backgroundColor: "white"
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    padRegist: {
        padding: normalize(20)
    },
    tube: {
        width: normalize(280),
        borderRadius: 10,
        height: normalize(40),
        justifyContent: "center",
        paddingLeft: normalize(10),
        backgroundColor: "#fcfaf9"
    },
    tube2: {
        width: normalize(280),
        borderRadius: 10,
        height: normalize(40),
        justifyContent: "center",
        backgroundColor: "#fcfaf9",
        paddingLeft: normalize(10),
        marginTop: normalize(20)
    }
})