import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const IdealTitle = ({ title }) => {
    return (
        <View 
            style={styles.ideals}
        >
            <Text
                style={styles.idealText}
            >
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ideals:{
        backgroundColor: '#45d4d5',
        flexDirection: 'row',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -1
    },
    idealText:{
        fontSize: 15,
        color: 'white',
        fontWeight: '700'
    },
})

export default IdealTitle