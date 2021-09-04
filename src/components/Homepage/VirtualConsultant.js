import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import IdealTitle from './IdealTitle';

const VirtualConsultant = ({ img_data }) => {

    const vc = img_data.map((obj, i) => {
        if(i % 2 === 0){
            return (
                <View 
                    key={i}
                    style={styles.vcContainerInner}
                >
                    <View
                        style={styles.vcImageContainer}
                    >
                        <Image 
                            source={obj.img}
                            resizeMode={'cover'}
                            style={styles.image}
                        />
                    </View>

                    <View
                        style={styles.vcTextContainer}
                    >
                        <Text
                            style={
                                    i == 0 ? [styles.vcText, { marginTop: -50 }] 
                                    : styles.vcText}
                        >
                            { obj.text}
                        </Text>
                    </View>
                </View>
            )
        }else{
            return (
                <View 
                    key={i}
                    style={styles.vcContainerInner}
                >
                    <View
                        style={styles.vcTextContainer}
                    >
                        <Text
                            style={
                                i == 1 ? [styles.vcText, { marginBottom: 25 }]
                                : styles.vcText}
                        >
                            { obj.text}
                        </Text>
                    </View>

                    <View
                        style={styles.vcImageContainer}
                    >
                        <Image 
                            source={obj.img}
                            resizeMode={'cover'}
                            style={styles.image}
                        />
                    </View>
                </View>
            )
        }
    })

    return (
        <>
        <View
            style={styles.vcContainer}
        >
            { vc }
        </View>
        <IdealTitle title="VIRTUAL CONSULTANT"/>
    </>
    )
}

const styles = StyleSheet.create({
    vcContainer: {
        height: 470,
        backgroundColor: 'white'
    },
    vcContainerInner: {
        flex: 1,
        flexDirection: 'row',
    },
    vcImageContainer: {
        flex: 1,
        marginTop: -25
    },
    vcTextContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    vcText: {
        fontSize: 15,
        textAlign: 'center'
    },
    image: {
        alignSelf: 'center',
        height: '100%',
        width: '100%',
    },
})

export default VirtualConsultant