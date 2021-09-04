import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
const Slick = require('react-native-slick').default 


const SlickDiamond = ( { img_data } ) => {

    return (
        <Slick style={styles.wrapper}
            
            showsButtons={true}
            showsPagination={false}
            nextButton={
                <Entypo name="chevron-right" size={44} color="#45d4d5"
                    style={[ styles.button, {marginRight:10}]}
                />
            }
            prevButton={
                <Entypo name="chevron-left" size={44} color="#45d4d5"
                style={[styles.button, {marginLeft:10}]}

                />
            }
        >
            { 
                img_data.map((obj, i) => {
                    return (
                        <View style={styles.slide} key={i}
                        >
                            <Image 
                                source={obj.img}

                            />
                            <Text
                                style={styles.title}
                            >{obj.name}</Text>
                            <Text
                                style={styles.info}
                            >{obj.info}</Text>
                        </View>
                    )
                })
            }
        </Slick>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: -60
    },
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    button:{
        marginTop: 170,
    },
    title: {
        fontSize: 17,
        fontWeight: '600',
        marginTop: -45,
        marginLeft: 10
    },
    info: {
        fontSize: 12,
        letterSpacing: 1,
        marginTop: 10,
        color: '#c2c2c2'
    }
})

export default SlickDiamond