import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import normalize from 'react-native-normalize';
import { girl1, girl2, girl3, girl4, logo, lovers, man1, man2, man3, man4, wallpaper } from '../../assets';
import BottomTabs from '../../components/BottomTabs';
import SwipeLove from '../../components/SwipeLove';


const Home = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [vip, setVip] = useState(false);
    const [woman, setWoman] = useState(false);
    const [man, setMan] = useState(false);
    const [swipe, setSwipe] = useState(false);

    const showDropdown = () => {
        setModalVisible(!modalVisible)
    }

    const showMan = () => {
        setMan(true);
        setWoman(false);
        setSwipe(false);
        setModalVisible(false);
    }

    const showWoman = () => {
        setWoman(true);
        setMan(false);
        setSwipe(false);
        setModalVisible(false);
    }

    const showSwipe = () => {
        setWoman(false);
        setMan(false);
        setSwipe(true);
        setModalVisible(false);
    }

    const renderAllGender = () => {
        return (
            <View style={{ flexDirection: "row" }}>
                <View style={{ flexWrap: "wrap" }}>
                    {/* Card */}
                    <View style={styles.card}>
                        <View style={{ overflow: "hidden" }}>
                            <ImageBackground resizeMode='cover' source={man1} style={styles.imgCard}>
                                <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
                                    <Icon type='font-awesome' name='heart' color={"#dfdfdf"} size={22} style={{ marginRight: normalize(10), marginTop: normalize(5) }} />
                                </View>
                                <View style={{ flexDirection: "row", marginTop: normalize(100), marginLeft: normalize(10) }}>
                                    <View style={styles.ageMan}>
                                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                            <Icon type='font-awesome-5' name='mars' color={"#fff"} size={14} />
                                            <Text style={{ fontSize: normalize(14), color: "#fff", fontWeight: "bold", paddingLeft: normalize(5) }}>28</Text>
                                        </View>
                                    </View>
                                    <View style={styles.vip}>
                                        <Text style={{ color: "white" }}>VIP</Text>
                                    </View>
                                </View>
                            </ImageBackground>

                            <View style={{ paddingLeft: normalize(10) }}>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome' name='user' color={"#33b4a6"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Erik</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome' name='suitcase' color={"#33b4a6"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Trader</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome' name='map-marker' color={"#33b4a6"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Single</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={{ overflow: "hidden" }}>
                            <ImageBackground resizeMode='cover' source={man2} style={styles.imgCard}>
                                <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
                                    <Icon type='font-awesome' name='heart' color={"#dfdfdf"} size={22} style={{ marginRight: normalize(10), marginTop: normalize(5) }} />
                                </View>
                                <View style={{ flexDirection: "row", marginTop: normalize(100), marginLeft: normalize(10) }}>
                                    <View style={styles.ageMan}>
                                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                            <Icon type='font-awesome-5' name='mars' color={"#fff"} size={14} />
                                            <Text style={{ fontSize: normalize(14), color: "#fff", fontWeight: "bold", paddingLeft: normalize(5) }}>25</Text>
                                        </View>
                                    </View>
                                    <View style={styles.vip}>
                                        <Text style={{ color: "white" }}>VIP</Text>
                                    </View>
                                </View>
                            </ImageBackground>

                            <View style={{ paddingLeft: normalize(10) }}>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome' name='user' color={"#33b4a6"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Rafa</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome' name='suitcase' color={"#33b4a6"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Mekanik</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome' name='map-marker' color={"#33b4a6"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Single</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

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
                                            <Text style={{ fontSize: normalize(14), color: "#fff", fontWeight: "bold", paddingLeft: normalize(5) }}>20</Text>
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
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Shanti</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome' name='suitcase' color={"#fc77a3"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Barista</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome' name='map-marker' color={"#fc77a3"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Single</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    const renderMan = () => {
        return (
            <View style={{ flexDirection: "row" }}>
                <View style={{ flexWrap: "wrap" }}>
                    {/* Card */}
                    <View style={styles.card}>
                        <View style={{ overflow: "hidden" }}>
                            <ImageBackground resizeMode='cover' source={man1} style={styles.imgCard}>
                                <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
                                    <Icon type='font-awesome' name='heart' color={"#dfdfdf"} size={22} style={{ marginRight: normalize(10), marginTop: normalize(5) }} />
                                </View>
                                <View style={{ flexDirection: "row", marginTop: normalize(100), marginLeft: normalize(10) }}>
                                    <View style={styles.ageMan}>
                                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                            <Icon type='font-awesome-5' name='mars' color={"#fff"} size={14} />
                                            <Text style={{ fontSize: normalize(14), color: "#fff", fontWeight: "bold", paddingLeft: normalize(5) }}>28</Text>
                                        </View>
                                    </View>
                                    <View style={styles.vip}>
                                        <Text style={{ color: "white" }}>VIP</Text>
                                    </View>
                                </View>
                            </ImageBackground>

                            <View style={{ paddingLeft: normalize(10) }}>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome' name='user' color={"#33b4a6"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Erik</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome' name='suitcase' color={"#33b4a6"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Trader</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome' name='map-marker' color={"#33b4a6"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Single</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={{ overflow: "hidden" }}>
                            <ImageBackground resizeMode='cover' source={man2} style={styles.imgCard}>
                                <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
                                    <Icon type='font-awesome' name='heart' color={"#dfdfdf"} size={22} style={{ marginRight: normalize(10), marginTop: normalize(5) }} />
                                </View>
                                <View style={{ flexDirection: "row", marginTop: normalize(100), marginLeft: normalize(10) }}>
                                    <View style={styles.ageMan}>
                                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                            <Icon type='font-awesome-5' name='mars' color={"#fff"} size={14} />
                                            <Text style={{ fontSize: normalize(14), color: "#fff", fontWeight: "bold", paddingLeft: normalize(5) }}>25</Text>
                                        </View>
                                    </View>
                                    <View style={styles.vip}>
                                        <Text style={{ color: "white" }}>VIP</Text>
                                    </View>
                                </View>
                            </ImageBackground>

                            <View style={{ paddingLeft: normalize(10) }}>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome' name='user' color={"#33b4a6"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Rafa</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome' name='suitcase' color={"#33b4a6"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Mekanik</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome' name='map-marker' color={"#33b4a6"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Single</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ flexWrap: "wrap" }}>
                    {/* Card */}
                    <View style={styles.card}>
                        <View style={{ overflow: "hidden" }}>
                            <ImageBackground resizeMode='cover' source={man3} style={styles.imgCard}>
                                <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
                                    <Icon type='font-awesome' name='heart' color={"#dfdfdf"} size={22} style={{ marginRight: normalize(10), marginTop: normalize(5) }} />
                                </View>
                                <View style={{ flexDirection: "row", marginTop: normalize(100), marginLeft: normalize(10) }}>
                                    <View style={styles.ageMan}>
                                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                            <Icon type='font-awesome-5' name='mars' color={"#fff"} size={14} />
                                            <Text style={{ fontSize: normalize(14), color: "#fff", fontWeight: "bold", paddingLeft: normalize(5) }}>30</Text>
                                        </View>
                                    </View>
                                    <View style={styles.vip}>
                                        <Text style={{ color: "white" }}>VIP</Text>
                                    </View>
                                </View>
                            </ImageBackground>

                            <View style={{ paddingLeft: normalize(10) }}>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome' name='user' color={"#33b4a6"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Dennis</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome' name='suitcase' color={"#33b4a6"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Model</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome' name='map-marker' color={"#33b4a6"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Duda</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={{ overflow: "hidden" }}>
                            <ImageBackground resizeMode='cover' source={man4} style={styles.imgCard}>
                                <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
                                    <Icon type='font-awesome' name='heart' color={"#dfdfdf"} size={22} style={{ marginRight: normalize(10), marginTop: normalize(5) }} />
                                </View>
                                <View style={{ flexDirection: "row", marginTop: normalize(100), marginLeft: normalize(10) }}>
                                    <View style={styles.ageMan}>
                                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                            <Icon type='font-awesome-5' name='mars' color={"#fff"} size={14} />
                                            <Text style={{ fontSize: normalize(14), color: "#fff", fontWeight: "bold", paddingLeft: normalize(5) }}>26</Text>
                                        </View>
                                    </View>
                                    <View style={styles.vip}>
                                        <Text style={{ color: "white" }}>VIP</Text>
                                    </View>
                                </View>
                            </ImageBackground>

                            <View style={{ paddingLeft: normalize(10) }}>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome' name='user' color={"#33b4a6"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Ariel</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome' name='suitcase' color={"#33b4a6"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Marketing</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome' name='map-marker' color={"#33b4a6"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Single</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    const renderWoman = () => {
        return (
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
                                            <Text style={{ fontSize: normalize(14), color: "#fff", fontWeight: "bold", paddingLeft: normalize(5) }}>20</Text>
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
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Shanti</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome' name='suitcase' color={"#fc77a3"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Barista</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome' name='map-marker' color={"#fc77a3"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Single</Text>
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
                                            <Text style={{ fontSize: normalize(14), color: "#fff", fontWeight: "bold", paddingLeft: normalize(5) }}>25</Text>
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
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Billie</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome' name='suitcase' color={"#fc77a3"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Model</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome' name='map-marker' color={"#fc77a3"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Single</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={{ overflow: "hidden" }}>
                            <ImageBackground resizeMode='cover' source={girl4} style={styles.imgCard}>
                                <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
                                    <Icon type='font-awesome' name='heart' color={"#dfdfdf"} size={22} style={{ marginRight: normalize(10), marginTop: normalize(5) }} />
                                </View>
                                <View style={{ flexDirection: "row", marginTop: normalize(100), marginLeft: normalize(10) }}>
                                    <View style={styles.age}>
                                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                            <Icon type='font-awesome-5' name='venus' color={"#fff"} size={14} />
                                            <Text style={{ fontSize: normalize(14), color: "#fff", fontWeight: "bold", paddingLeft: normalize(5) }}>19</Text>
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
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Norah</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome' name='suitcase' color={"#fc77a3"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Model</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: normalize(5) }}>
                                    <Icon type='font-awesome' name='map-marker' color={"#fc77a3"} size={22} />
                                    <Text style={{ fontSize: normalize(14), color: "black", fontWeight: "bold", paddingLeft: normalize(10) }}>Single</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    useEffect(() => {
    }, [])

    return (
        <View style={styles.background}>
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
                        <TouchableOpacity style={styles.circle1} onPress={() => showDropdown()}>
                            <Icon type='font-awesome-5' name='bars' color={"white"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Modal */}
            <Modal
                animationType='fade'
                transparent
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(!modalVisible) }}
            >
                <View style={styles.modalPosition}>
                    <View style={{ justifyContent: "flex-end", alignItems: "flex-end", paddingTop: normalize(12), paddingRight: normalize(14) }}>
                        <TouchableOpacity style={styles.circle2} onPress={() => showDropdown()}>
                            <Icon type='font-awesome-5' name='bars' color={"white"} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.modalBg}>
                        <TouchableOpacity onPress={() => showMan()}>
                            <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", paddingTop: normalize(10) }}>
                                <Icon type='font-awesome-5' name='mars' color={"#3cb4f4"} size={22} />
                                <Text style={{ fontSize: normalize(14), color: "#3cb4f4", fontWeight: "bold", paddingLeft: normalize(10) }}>Hanya Pria</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => showWoman()}>
                            <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", paddingTop: normalize(10) }}>
                                <Icon type='font-awesome-5' name='venus' color={"#fc77a3"} size={22} />
                                <Text style={{ fontSize: normalize(14), color: "#fc77a3", fontWeight: "bold", paddingLeft: normalize(10) }}>Hanya Wanita</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { setMan(false), setWoman(false) }}>
                            <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", paddingTop: normalize(10) }}>
                                <Icon type='font-awesome-5' name='user-alt' color={"#808080"} size={22} />
                                <Text style={{ fontSize: normalize(14), color: "#808080", fontWeight: "bold", paddingLeft: normalize(10) }}>Lihat Semua</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => props.navigation.navigate('vip')}>
                            <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", paddingTop: normalize(10) }}>
                                <Icon type='font-awesome-5' name='vimeo-v' color={"#3cb4f4"} size={22} />
                                <Text style={{ fontSize: normalize(14), color: "#3cb4f4", fontWeight: "bold", paddingLeft: normalize(10) }}>Member VIP</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>showSwipe()}>
                            <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", paddingTop: normalize(10) }}>
                                <Icon type='font-awesome' name='heart' color={"#fc77a3"} size={22} />
                                <Text style={{ fontSize: normalize(14), color: "#fc77a3", fontWeight: "bold", paddingLeft: normalize(10) }}>Swipe Love</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", paddingTop: normalize(10) }}>
                            <Icon type='font-awesome-5' name='ban' color={"red"} size={22} />
                            <Text style={{ fontSize: normalize(14), color: "red", fontWeight: "bold", paddingLeft: normalize(10) }}>Blokir</Text>
                        </View>
                    </View>
                </View>
            </Modal>
            <ScrollView >
                <View style={{ padding: normalize(15) }}>
                    {/* VIP */}
                    {
                        vip ? null : (
                            <View>
                                <Text style={{ fontSize: normalize(18), color: "black", textAlign: "center" }}>
                                    Lihatlah lebih banyak kandidat calon pasangan
                                    dengan menjadi anggota VIP member
                                </Text>
                                <View style={{ paddingTop: normalize(10), justifyContent: "center", alignItems: "center" }}>
                                    <TouchableOpacity style={styles.btnKlik} onPress={() => props.navigation.navigate("vip")}>
                                        <Text style={{ fontSize: normalize(24), color: "black", fontWeight: "bold" }}>Klik</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}

                    {
                        man ? (renderMan()) : woman ? (renderWoman()) : swipe ? (<SwipeLove/>) : (renderAllGender())
                    }
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
    btnKlik: {
        width: normalize(100),
        height: normalize(50),
        backgroundColor: "#fcd304",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
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
    circle2: {
        width: normalize(40),
        height: normalize(40),
        borderRadius: 40,
        borderWidth: 1,
        justifyContent: "center",
        borderColor: "white",
        zIndex: 1000,
    },
    modalPostion: {
        zIndex: 999
    },
    modalBg: {
        backgroundColor: "white",
        width: normalize(130),
        height: normalize(200),
        marginLeft: normalize(240),
        marginTop: normalize(10),
        borderColor: "#dfdfdf",
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: normalize(10)
    },
    card: {
        width: normalize(170),
        height: normalize(250),
        borderRadius: 10,
        marginRight: normalize(10),
        marginTop: normalize(10),
        borderColor: "#dfdfdf"
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
    ageMan: {
        width: normalize(40),
        height: normalize(20),
        backgroundColor: "#33b4a6",
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