import React, { useState } from 'react';
import { TextInput, TouchableOpacity, StyleSheet, View  } from 'react-native';
import { Feather } from '@expo/vector-icons';

function Search () {

    const [ text, setText ] = useState('')

    return (
        <View style={styles.inputContainer} >
            <TextInput 
                placeholder='Enter Product'
                style={styles.textInput}
                value={text}
                onChangeText={setText}
                autocomplete={false}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <TouchableOpacity style={styles.icon}>
                <Feather name="search" size={32} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', 
        backgroundColor: 'white',
    },
    textInput: {
        padding: 10,
        flex: 1,
        height: 60,
        borderBottomColor: '#dedede',
        borderBottomWidth: 1,
        fontSize: 16
    },
    icon : {
        height: 48, 
        marginTop: 12, 
        paddingRight: 30, 
        borderBottomColor: '#dedede', 
        borderBottomWidth: 1
    }
})

export default Search