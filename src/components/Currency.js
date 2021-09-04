import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Platform } from 'react-native';


function Currency( { currencyArr, navigation, currentCurrency} ) {

    const isWeb = Platform.OS === 'web'
    if(!currencyArr){
        return <Text>Currency Not Available</Text>;
    }

    const currencyObj = currencyArr.map( currency => {
        return (
            <TouchableOpacity
                style={
                        isWeb ? [
                            styles.currencyWeb, styles.center
                        ]
                        : styles.currency 
                    }
                key={currency}
                onPress={() => navigation.navigate('Home')}
            >
                {
                    currentCurrency === currency ? 
                    <Text
                        style={[ styles.text, styles.highlightText ]}
                    >{currency}</Text> :
                    <Text
                    style={[ styles.text, styles.normalText ]}
                    >{currency}</Text>
                }
            </TouchableOpacity>
        )
    })



    return (
        <View style={
                isWeb ?
                [styles.currencyContainer, {  margin: 20, marginVertical: 6 }]
                : styles.currencyContainer
            }
        >
            {currencyObj}
        </View>
    );
}

const styles = StyleSheet.create({
    currencyContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
        marginVertical: 20
    },
    currency: {
        width: 40,
        height: 40,
    },
    currencyWeb:{
        width: 30,
        height: 30, 
    },
    text: {
        fontSize: 11
    },
    normalText:{
        color: '#bdbdbd'
    },
    highlightText:{
        color: '#45d4d5',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Currency