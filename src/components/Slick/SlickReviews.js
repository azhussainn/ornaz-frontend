import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
const Slick = require('react-native-slick').default 


const SlickReviews = ( { img_data, googleReviewImg } ) => {

    return (
        <Slick
            showsButtons={true}
            showsPagination={false}
            nextButton={
                <Entypo name="chevron-right" size={44} color="black"
                    style={{marginRight:10}}
                />
            }
            prevButton={
                <Entypo name="chevron-left" size={44} color="black"
                style={{marginLeft:10}}

                />
            }
        >
            { 
                img_data.map((obj, i) => {
                    return (
                        <View style={styles.slide} key={i}>
                            <Image 
                                source={obj.img}
                                style={styles.image}
                                resizeMode={'contain'}
                            />
                            <View style={styles.iconContainer}>
                                <Entypo name="star" size={30} color="#45d4d5" />
                                <Entypo name="star" size={30} color="#45d4d5" />
                                <Entypo name="star" size={30} color="#45d4d5" />
                                <Entypo name="star" size={30} color="#45d4d5" />
                                <Entypo name="star" size={30} color="#45d4d5" />
                            </View>
                            <View style={styles.titleContainer}>
                                <ScrollView nestedScrollEnabled={true}>
                                    <Text style={styles.title}>
                                        {obj.title}
                                    </Text>
                                </ScrollView>
                            </View>
                            <View style={styles.nameContainer}>
                                <Text style={styles.name}>
                                    {obj.name}
                                </Text>
                            </View>
                            <View style={styles.reviewIconContainer}>
                                <Image 
                                    source={googleReviewImg}
                                    style={styles.image}
                                    resizeMode={'contain'}
                                />
                            </View>
                        </View>
                    )
                })
            }
        </Slick>
    )
}

const styles = StyleSheet.create({
    slide: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    image: {
        alignSelf: 'center',
        height: '30%',
        width: '30%',
        borderRadius: 50
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
        height: 45,
        width: 150,
        marginTop: -30
    },
    titleContainer: {
        width: 180,
        maxHeight: 230,
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center'
    },
    title: {
        lineHeight: 25,
        textAlign: 'center', 
        fontSize: 12
    },
    nameContainer: {
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    name:{
        color: 'cornflowerblue',
        fontSize: 13
    },
    reviewIconContainer: {
        width: 200,
    }

})

export default SlickReviews