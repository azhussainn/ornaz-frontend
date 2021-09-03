import React, { useState } from 'react';
import {Platform,  Modal, TouchableOpacity, View, StyleSheet, Dimensions, Image  } from 'react-native';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MobileHeader from './web/Header';
import Search from '../components/Search';
import logo from '../../assets/icons/logo.png';


const Header = ( ) => {

    const windowWidth = Dimensions.get('window').width;
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);


    if(Platform.OS === 'web'){
        return <MobileHeader />
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
})

export default Header