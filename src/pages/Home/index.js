import React, { useState } from 'react';
import { Image, ImageBackground, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import normalize from 'react-native-normalize';
import { girl1, girl2, girl3, logo, lovers, wallpaper } from '../../assets';


const Home = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <View style={styles.header}>
                <View style={{ flexDirection: "row" }}>
                    <Image source={logo} style={styles.imgLogo} />

                    <View style={styles.searchBar}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon type='font-awesome-5' name='search' color={"#fc77a3"} style={{ marginTop: normalize(5) }} />
                            <TextInput placeholder='Pencarian Lokasi' placeholderTextColor={"#fc77a3"} style={{ color: "#fc77a3", paddingLeft: normalize(10) }} />
                        </View>
                    </View>

                    <View style={{ justifyContent: "center", paddingLeft: normalize(10) }}>
                        <TouchableOpacity style={styles.circle1} onPress={() => setModalVisible(!modalVisible)}>
                            <Icon type='font-awesome-5' name='bars' color={"white"} />
                        </TouchableOpacity>
                    </View>

                    {/* Modal */}
                    <Modal
                        animationType='fade'
                        transparent
                        visible={modalVisible}
                        onRequestClose={() => { setModalVisible(!modalVisible) }}
                        onta
                    >
                        <View style={styles.modalPosition}>
                            <View style={styles.modalBg}>
                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome-5' name='mars' color={"#3cb4f4"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "#3cb4f4", fontWeight: "bold", paddingLeft: normalize(10) }}>Hanya Pria</Text>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome-5' name='venus' color={"#fc77a3"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "#fc77a3", fontWeight: "bold", paddingLeft: normalize(10) }}>Hanya Wanita</Text>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome-5' name='user-alt' color={"#808080"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "#808080", fontWeight: "bold", paddingLeft: normalize(10) }}>Lihat Semua</Text>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome-5' name='vimeo-v' color={"#3cb4f4"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "#3cb4f4", fontWeight: "bold", paddingLeft: normalize(10) }}>Member VIP</Text>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome-5' name='ban' color={"red"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "red", fontWeight: "bold", paddingLeft: normalize(10) }}>Blokir</Text>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
            <ScrollView style={styles.background}>
                <View style={{ padding: normalize(15) }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flexWrap: "wrap" }}>
                            {/* Card */}
                            <View style={styles.card}>
                                <View style={{ overflow: "hidden" }}>
                                    <ImageBackground resizeMode='cover' source={girl1} style={styles.imgCard}>
                                        <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
                                            <Icon type='font-awesome' name='heart' color={"#dfdfdf"} size={22} style={{ marginRight: normalize(10), marginTop: normalize(5) }} />
                                        </View>
                                        <View style={{ flexDirection: "row", marginTop: normalize(100), marginLeft: normalize(10) }}>
                                            <View style={styles.age}>
                                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                                    <Icon type='font-awesome-5' name='venus' color={"#fff"} size={14} />
                                                    <Text style={{ fontSize: normalize(14), color: "#fff", fontWeight: "bold", paddingLeft: normalize(5) }}>22</Text>
                                                </View>
                                            </View>
                                            <View style={styles.vip}>
                                                <Text style={{ color: "white" }}>VIP</Text>
                                            </View>
                                        </View>
                                    </ImageBackground>

                                    <View style={{ paddingLeft: normalize(10) }}>
                                        <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                            <Icon type='font-awesome' name='user' color={"#fc77a3"} size={22} />
                                            <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Susi</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                            <Icon type='font-awesome' name='suitcase' color={"#fc77a3"} size={22} />
                                            <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>SPG</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                            <Icon type='font-awesome' name='map-marker' color={"#fc77a3"} size={22} />
                                            <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Janda</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.card}>
                                <View style={{ overflow: "hidden" }}>
                                    <ImageBackground resizeMode='cover' source={girl2} style={styles.imgCard}>
                                        <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
                                            <Icon type='font-awesome' name='heart' color={"#dfdfdf"} size={22} style={{ marginRight: normalize(10), marginTop: normalize(5) }} />
                                        </View>
                                        <View style={{ flexDirection: "row", marginTop: normalize(100), marginLeft: normalize(10) }}>
                                            <View style={styles.age}>
                                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                                    <Icon type='font-awesome-5' name='venus' color={"#fff"} size={14} />
                                                    <Text style={{ fontSize: normalize(14), color: "#fff", fontWeight: "bold", paddingLeft: normalize(5) }}>22</Text>
                                                </View>
                                            </View>
                                            <View style={styles.vip}>
                                                <Text style={{ color: "white" }}>VIP</Text>
                                            </View>
                                        </View>
                                    </ImageBackground>

                                    <View style={{ paddingLeft: normalize(10) }}>
                                        <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                            <Icon type='font-awesome' name='user' color={"#fc77a3"} size={22} />
                                            <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Susi</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                            <Icon type='font-awesome' name='suitcase' color={"#fc77a3"} size={22} />
                                            <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>SPG</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                            <Icon type='font-awesome' name='map-marker' color={"#fc77a3"} size={22} />
                                            <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Janda</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ flexWrap: "wrap" }}>
                            {/* Card */}
                            <View style={styles.card}>
                                <View style={{ overflow: "hidden" }}>
                                    <ImageBackground resizeMode='cover' source={girl3} style={styles.imgCard}>
                                        <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
                                            <Icon type='font-awesome' name='heart' color={"#dfdfdf"} size={22} style={{ marginRight: normalize(10), marginTop: normalize(5) }} />
                                        </View>
                                        <View style={{ flexDirection: "row", marginTop: normalize(100), marginLeft: normalize(10) }}>
                                            <View style={styles.age}>
                                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                                    <Icon type='font-awesome-5' name='venus' color={"#fff"} size={14} />
                                                    <Text style={{ fontSize: normalize(14), color: "#fff", fontWeight: "bold", paddingLeft: normalize(5) }}>22</Text>
                                                </View>
                                            </View>
                                            <View style={styles.vip}>
                                                <Text style={{ color: "white" }}>VIP</Text>
                                            </View>
                                        </View>
                                    </ImageBackground>

                                    <View style={{ paddingLeft: normalize(10) }}>
                                        <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                            <Icon type='font-awesome' name='user' color={"#fc77a3"} size={22} />
                                            <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Susi</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                            <Icon type='font-awesome' name='suitcase' color={"#fc77a3"} size={22} />
                                            <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>SPG</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                            <Icon type='font-awesome' name='map-marker' color={"#fc77a3"} size={22} />
                                            <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Janda</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            
                        </View>

                    </View>
                </View>
            </ScrollView>
        </View>
    );
}



export default Home;

const styles = StyleSheet.create({
    background: {
        height: '100%',
        backgroundColor: "#fff"
    },
    header: {
        height: normalize(60),
        backgroundColor: "#fc77a3",
        width: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    imgLogo: {
        width: normalize(50),
        height: normalize(50)
    },
    searchBar: {
        width: normalize(250),
        height: normalize(40),
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 20,
        marginLeft: normalize(10),
        marginTop: normalize(5),
        paddingLeft: normalize(20)
    },
    circle1: {
        width: normalize(40),
        height: normalize(40),
        borderRadius: 40,
        borderWidth: 1,
        justifyContent: "center",
        borderColor: "white"
    },
    modalPostion: {
    },
    modalBg: {
        backgroundColor: "white",
        width: normalize(130),
        height: normalize(180),
        marginLeft: normalize(240),
        marginTop: normalize(50),
        borderColor: "#dfdfdf",
        borderWidth: 1,
        borderRadius: 10
    },
    card: {
        width: normalize(170),
        height: normalize(250),
        borderRadius: 10,
        borderWidth: 1,
        marginRight: normalize(10),
        marginTop:normalize(10)
    },
    imgCard: {
        width: normalize(170),
        height: normalize(150),
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: "hidden"
    },
    age: {
        width: normalize(40),
        height: normalize(20),
        backgroundColor: "#fc77a3",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
    vip: {
        width: normalize(40),
        height: normalize(20),
        backgroundColor: "#fcd304",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        marginLeft: normalize(80)
    }
})