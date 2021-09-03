import React, { useState } from 'react';
import {TextInput, TouchableOpacity, View, StyleSheet, Dimensions, Image  } from 'react-native';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import logo from '../../../assets/icons/logo.png';

const MobileHeader = () => {

    const windowWidth = Dimensions.get('window').width;
    const navigation = useNavigation();
    const [ inputVisible, setInputVisible] = useState(false);
    const [ mobileInput, setMobileInput ] = useState('');

    const searchProduct= () => {
        console.log("Searching the Product...")
    }

    if(!inputVisible){
        return (
            <View
                 style={[ styles.mobileHeader, {
                     width: windowWidth - 70
                 }]}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={styles.mobileOrnazLogoContainer}
                >
                 <Image 
                     source={logo}
                     style={styles.mobileOrnazLogo}
                     resizeMode={'contain'}
                 />
                </TouchableOpacity>
             <View
                 style={styles.mobileSearchIconContainerX}
             >
                 <TouchableOpacity
                     onPress={() => setInputVisible(true)}
                 >
                     <Feather name="search" size={32} color="black" />
                 </TouchableOpacity>
             </View>
             <View
                  style={styles.mobileCartIconContainerX}
             >
                 <TouchableOpacity
                     onPress={() => navigation.navigate('Cart')}
                 >
                     <SimpleLineIcons name="handbag" size={30} color="black" />
                 </TouchableOpacity>
             </View>
           </View>
            )
    }else{
        return (
            <View
            style={[ styles.mobileSearchContainer, {width: windowWidth - 70 }]}
            >
                <TextInput 
                    style={styles.mobileTextInput}
                    value={mobileInput}
                    onChangeText={setMobileInput}
                />
                <TouchableOpacity
                     onPress={() => {
                         setInputVisible(false)
                         searchProduct()
                        }}
                     style={styles.mobileSearchIconContainer}
                 >
                    <Feather name="search" size={32} color="black" />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mobileHeader:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    mobileOrnazLogoContainer: {
        width: 110 
    },
    mobileOrnazLogo:{
        marginLeft: -20,
        height: 30,
        flex: 1,
    },
    mobileSearchIconContainerX: {
        position: 'absolute',
        right: 60
    },
    mobileCartIconContainerX:{
        position: 'absolute', 
        right: 10
    },
    mobileSearchContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',  
        marginLeft: -15    
    },
    mobileTextInput:{
        flex: 1,
        borderColor: 'grey',
        borderWidth: 1,
        padding: 15,
        fontSize: 18,
        borderRadius: 2
    },
    mobileSearchIconContainer :{
        margin: 7
    },
    
})

export default MobileHeader