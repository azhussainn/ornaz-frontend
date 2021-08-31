import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';


function Currency( { currencyArr, navigation, currentCurrency} ) {

    if(!currencyArr){
        return <Text>Currency Not Available</Text>;
    }

    const currencyObj = currencyArr.map( currency => {
        return (
            <TouchableOpacity
                style={styles.currency}
                key={currency}
                onPress={() => navigation.navigate('Home')}
            >
                {
                    currentCurrency === currency ? 
                    <Text
                        style={{ color: '#45d4d5', fontSize: 11 }}
                    >{currency}</Text> :
                    <Text
                        style={{ color: '#bdbdbd', fontSize: 11}}
                    >{currency}</Text>
                }
            </TouchableOpacity>
        )
    })



    return (
        <View style={styles.currencyContainer}>
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
        height: 40
    },
})

export default Currency