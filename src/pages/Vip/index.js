import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import normalize from 'react-native-normalize';
import { chatlove, vip } from '../../assets';

const Vip = (props) => {
    return (
        <View style={{ backgroundColor: "#fff" }}>
            {/* Header */}
            <View style={styles.header}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("home")}>
                        <Icon type='font-awesome-5' name='arrow-left' color={"white"} size={normalize(30)} />
                    </TouchableOpacity>
                    <View style={{paddingLeft:normalize(30)}}>
                        <Text style={{color:"white", fontSize:normalize(24), fontWeight:"bold"}}>VIP</Text>
                    </View>
                </View>
            </View>

            {/* Body */}
            <View style={{ padding: normalize(20) }}>

                <View style={styles.centering}>
                    <Image source={chatlove} style={{ width: normalize(300), height: normalize(200) }} />
                </View>

                <View style={styles.centering}>
                    <Text style={{ color: "black", fontSize: normalize(20) }}>Bergabung Menjadi Anggota VIP</Text>
                </View>

                <View style={styles.centering}>
                    <Text style={{ color: "black", fontSize: normalize(20), fontWeight: "bold" }}>Paket Rp. 100.000 (Untuk 3 Bulan)</Text>
                    <Text style={{ color: "black", fontSize: normalize(20), fontWeight: "bold" }}>Paket Rp. 175.000 (Untuk Selamanya)</Text>
                </View>

                <View style={styles.centering}>
                    <Text style={{ color: "black", fontSize: normalize(20) }}>Transfer pada rekening</Text>
                    <Text style={{ color: "black", fontSize: normalize(20) }}>Bank Mandiri 173-00-04508124</Text>
                    <Text style={{ color: "black", fontSize: normalize(20), textAlign: "center" }}>
                        A.N Yana Evi Nugrahaeni {"\n"}
                        (Best app dating)
                    </Text>
                </View>

                <View style={{ paddingTop: normalize(20), justifyContent: "center", alignItems: "center" }}>
                    {/* <Image source={vip} style={{ width: normalize(120), height: normalize(120) }} /> */}
                    <TouchableOpacity style={styles.btnOk} onPress={() => props.navigation.navigate("home")}>
                        <Text style={{ color: "black" }}>Ok</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Vip;

const styles = StyleSheet.create({
    header: {
        height: normalize(50),
        padding: normalize(10),
        backgroundColor: "#fc77a3",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    btnOk: {
        width: normalize(100),
        height: normalize(50),
        backgroundColor: "#fcd304",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    pinkWrapper: {
        width: '100%',
        backgroundColor: "#f7dee7",
        height: normalize(50),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30
    },
    centering: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: normalize(20)
    }
})