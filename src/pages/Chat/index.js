import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import normalize from 'react-native-normalize';
import { wallap } from '../../assets';

const Chat = (props) => {
    return (
        <View style={{ height: "100%", backgroundColor: "#fff" }}>
            <View style={styles.header}>
                <View style={{ flexDirection: "row" }}>
                    <Icon type='font-awesome' name='arrow-left' color={"#fff"} size={normalize(30)} />
                    <Text style={{ color: "white", fontSize: normalize(24), paddingLeft: normalize(20) }}>Susi</Text>
                </View>
            </View>
            <ImageBackground source={wallap} style={{ height: "100%" }}>
                <ScrollView>
                    <View>

                    </View>
                </ScrollView>
                <View style={{ justifyContent:"space-between", flex:1, marginTop:normalize(440), marginLeft:normalize(10) }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.boxChat}>
                            <TextInput placeholder='Kirim Pesan' style={{fontSize:normalize(18)}} />
                        </View>
                        <TouchableOpacity>
                            <View style={styles.circleSend}>
                                <Icon type='font-awesome' name='paper-plane'/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </ImageBackground>
        </View>
    )
}

export default Chat;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: normalize(50),
        justifyContent: "center",
        paddingLeft: normalize(20),
        backgroundColor: "#fc77a3"
    },
    boxChat: {
        width: normalize(300),
        height: normalize(50),
        backgroundColor: "#dfdfdf",
        borderRadius: 30,
        paddingLeft:normalize(20)
    },
    circleSend:{
        width: normalize(50),
        height: normalize(50),
        backgroundColor: "#fc77a3",
        borderRadius: 50,
        marginLeft:normalize(10),
        justifyContent:"center"
    },
    msg1:{
        
        height: normalize(50),
        backgroundColor: "#fc77a3",
        borderRadius: 50,
        marginLeft:normalize(10),
        justifyContent:"center"
    }
})