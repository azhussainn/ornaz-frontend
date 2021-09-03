import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';


const HimHer = ({ himHerData, navigation }) => {

    const handleNavigation = (title) => {
        if(title === 'FOR HER'){
            navigation.navigate('ForHer')
        }else{
            navigation.navigate('ForHim')
        }
    }

    const images = himHerData.map((obj) => {
        return (
                <TouchableOpacity
                    style={ obj.title === 'FOR HER' ? 
                    [styles.genderImageContainer, { marginRight: 10}  ]
                    : [styles.genderImageContainer, { marginLeft: 10}  ]
                }
                    key={obj.title}
                    onPress={ () => handleNavigation(obj.title)}
                >
                    <Image
                        style={styles.image}
                        resizeMode={'cover'}
                        source={obj.img}
                    />
                </TouchableOpacity>
        )
    })

    const text = himHerData.map(obj => {
        return(
            <Text style={ obj.title === 'FOR HER' ? 
                    [styles.himHerText, { marginRight: 30}]
                    : [styles.himHerText, { marginLeft: 30}]
                }
                key={obj.title}
            >
                {obj.title}
            </Text>
        )
    })

    return (
        <View style={styles.himHerContainer}>
        <View style={styles.himHerImageContainer}>
            {images}
        </View>
        <View style={styles.himHerTextContainer}>
            {text}
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
    himHerContainer: {
        height: 240 
    },
    himHerImageContainer: {
        height: 200, 
        flexDirection: 'row', 
        zIndex: 1 
    },
    genderImageContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 20,
    },
    himHerTextContainer: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-evenly',
        backgroundColor: '#45d4d5',
        marginTop: -65,
        alignItems: 'flex-end'
    },
    himHerText: {
        marginBottom: 20, 
        color: 'white', 
        fontWeight: 'bold'
    },

})

export default HimHer