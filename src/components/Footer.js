import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { footerLogos, companyAddress } from '../Static';


const Footer = () => {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.linkContainer}>
                <TouchableOpacity>
                    <Text style={styles.linkText}>
                        ABOUT ORNAZ &nbsp; |
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.linkText}>
                        SHIPPING & RETURNS &nbsp; |
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.linkText}>
                        TERMS AND CONDITIONS
                    </Text>
                </TouchableOpacity>
            </View>
            <View
                style={styles.iconsContainer}
            >
                <View style={styles.iconParent}>
                    <Image
                        style={styles.image}
                        resizeMode={'contain'}
                        source={footerLogos.insta}
                    />
                </View>
                <View style={styles.iconParent}>
                    <Image
                        style={styles.image}
                        resizeMode={'contain'}
                        source={footerLogos.fb}
                    />
                </View>
                <View style={styles.iconParent}>
                    <Image
                        style={styles.image}
                        resizeMode={'contain'}
                        source={footerLogos.twitter}
                    />
                </View>
            </View>
            <View style={styles.infoContainer}>
                <Text style={[styles.infoText, {lineHeight: 16 }]}>
                    {companyAddress}
                </Text>
                <Text style={[styles.infoText, {marginTop: 10 }]}>
                    @2021 ORNAZ. All Rights Reserved
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        alignSelf: 'center',
        height: '100%',
        width: '100%',
    },
    footerContainer: {
        height: 240,
        backgroundColor: '#f5f5f5'
    },
    linkContainer: {
        flex: 0.3,
        flexDirection: 'row',
        borderColor: '#c5c5c591',
        borderBottomWidth: 0.5,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginHorizontal: 7
    },
    linkText:{
        fontSize: 10, 
        color: '#5a5a5a', 
        fontWeight: '100' 
    },
    iconsContainer: {
        flex: 0.45,
        flexDirection: 'row',
        paddingVertical: 15
    },
    iconParent:{
        flex: 1,
    },
    infoContainer:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'center',
    },
    infoText:{
        fontSize: 11, 
        color: '#000000bd', 
        fontWeight: '100', 
        letterSpacing: 1.3
    }
})

export default Footer