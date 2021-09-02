import React, { useState } from 'react';
import {TextInput, Platform,  Modal, TouchableOpacity, View, StyleSheet, Dimensions, Image  } from 'react-native';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Search from '../components/Search';
import logo from '../../assets/icons/logo.png';


const Header = ( ) => {

    const windowWidth = Dimensions.get('window').width;
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [ inputVisible, setInputVisible] = useState(false);
    const [ mobileInput, setMobileInput ] = useState('');

    const searchProduct= () => {
        console.log("Searching the Product...")
    }


    if(Platform.OS === 'web'){
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
    }else{
        return (
            <View style={[styles.headerContainer, { width: windowWidth - 70 }]}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={styles.imageContainer}
                >
                    <Image 
                        source={logo}
                        style={styles.image}
                    />
                </TouchableOpacity>

                <View style={styles.centeredView}>
                    <Modal
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible)}
                        }
                    >
                        <View style={styles.centeredView}>
                            <Search />
                            <View style={styles.modalView}>
                                <TouchableOpacity
                                    style={styles.closeModal}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    <TouchableOpacity
                        style={styles.search}
                        onPress={() => setModalVisible(true)}
                    >
                        <Feather name="search" size={32} color="black" />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Cart')}
                >
                    <SimpleLineIcons name="handbag" size={30} color="black" />
                </TouchableOpacity>

            </View>
    )
    }


}

const styles = StyleSheet.create({
    headerContainer : {
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginLeft : -15
    },
    imageContainer : {
        width : 125
    },
    image: {
        flex: 1,
    },
    search : {
        position: 'absolute', 
        top: -15, 
        right: 20
    },
    centeredView: {
        flex: 1,
    },
    modalView: {
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.65)',
        flex: 1,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    closeModal: {
        flex: 1,
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
    }
})

export default Header