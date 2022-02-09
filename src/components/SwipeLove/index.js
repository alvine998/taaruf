import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import normalize from 'react-native-normalize';
import { girl1 } from '../../assets';

const SwipeLove = (props) => {
    return (
        <View style={styles.bordered}>
            <View style={{ overflow: "hidden" }}>
                <ImageBackground source={girl1} resizeMode={"cover"} style={styles.imgSize}>
                    <View style={{ paddingLeft: normalize(20), paddingTop: normalize(290) }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.age}>
                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                    <Icon type='font-awesome-5' name='venus' color={"#fff"} size={36} />
                                    <Text style={{ fontSize: normalize(36), color: "#fff", fontWeight: "bold", paddingLeft: normalize(10) }}>25</Text>
                                </View>
                            </View>
                            <View style={styles.vip}>
                                <Text style={{ fontSize: normalize(36), color: "#fff", fontWeight: "bold" }}>VIP</Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{ padding: normalize(20) }}>
                    <Text style={{ fontSize: normalize(24), fontWeight: "bold", color: "black" }}>Susi</Text>
                    <Text style={{ fontSize: normalize(18), color: "black" }}>SPG</Text>
                    <Text style={{ fontSize: normalize(18), color: "black" }}>Janda</Text>

                    <View style={{ flexDirection: "row", paddingTop: normalize(10) }}>
                        <TouchableOpacity>
                            <View style={styles.notlike}>
                                <Icon type='font-awesome' name='times' size={normalize(50)} color={"#fc77a3"} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.massage}>
                                <Icon type='font-awesome' name='comment' size={normalize(50)} color={"#fff"}/>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.love}>
                                <Icon type='font-awesome' name='heart' size={normalize(50)} color={"#fff"}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SwipeLove;

const styles = StyleSheet.create({
    bordered: {
        width: '100%',
        height: normalize(550),
        borderColor: "#dfdfdf",
        borderRadius: 20,
        borderWidth: 1,
        marginTop: normalize(-100)
    },
    imgSize: {
        width: '100%',
        height: normalize(350),
        overflow: "hidden",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    age: {
        width: normalize(100),
        height: normalize(50),
        backgroundColor: "#fc77a3",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    vip: {
        width: normalize(100),
        height: normalize(50),
        backgroundColor: "#fcd304",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginLeft: normalize(110)
    },
    notlike: {
        width: normalize(80),
        height: normalize(80),
        backgroundColor: "#ffc2d9",
        borderRadius: 50,
        justifyContent:"center",
        alignItems:"center"
    },
    massage: {
        width: normalize(80),
        height: normalize(80),
        backgroundColor: "#ffc2d9",
        borderRadius: 50,
        marginLeft: normalize(40),
        justifyContent:"center",
        alignItems:"center"
    },
    love: {
        width: normalize(80),
        height: normalize(80),
        backgroundColor: "#fc77a3",
        borderRadius: 50,
        marginLeft: normalize(40),
        justifyContent:"center",
        alignItems:"center"
    }
})