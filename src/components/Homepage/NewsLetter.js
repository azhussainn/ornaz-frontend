import React, {useState} from 'react';
import { View, Image, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';


const NewsLetter = ({ newsLetterData }) => {

    const [ text, setText ] = useState('')
    const iconsContainer = []

    const handleSubmit = () => {
        console.log("ButtonPressed")
    }

    for(let i=0; i < newsLetterData.length; i+=2) {
        iconsContainer.push(
            <View style={styles.iconsParent} key={i} >
                <View style={styles.iconsParent}>
                    <View
                        style={styles.iconImgContainer}
                    >
                        <Image
                            style={styles.image}
                            resizeMode={'contain'}
                            source={newsLetterData[i].img}
                        />
                    </View>
                    <View
                        style={styles.iconLabelContainer}
                    >
                        <Text
                            style={styles.iconLabel}
                        >
                            {newsLetterData[i].title}
                        </Text>
                    </View>
                </View>
                <View style={styles.iconsParent}>
                    <View
                        style={styles.iconImgContainer}
                    >
                        <Image
                            style={styles.image}
                            resizeMode={'contain'}
                            source={newsLetterData[i+1].img}
                        />
                    </View>
                    <View
                        style={styles.iconLabelContainer}
                    >
                        <Text
                            style={styles.iconLabel}
                        >
                            {newsLetterData[i+1].title}
                        </Text>
                    </View>
                </View>
            </View>)
    }


    return (
        <View style={styles.newsLetterContainer}>
                <View>
                    <View style={{flex: 1}}>
                        <Text style={styles.heading}>
                            For Everything on
                        </Text>
                        <Text style={[ styles.heading, {marginTop: 5}]}>
                            Engagement Ring & Jewellery
                        </Text>
                    </View>

                    <View
                        style={styles.textInputContainer}
                    >
                        <TextInput 
                            style={styles.textInput}
                             placeholder='Signup for Newsletter'
                             value={text}
                             onChangeText={setText}
                             autoCorrect={false}
                             autoCapitalize='none'
                             autoComplete={false}
                        />
                        <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={handleSubmit}
                        >
                            <Text>JOIN</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <View style={styles.iconsContainer}>
                    {iconsContainer}
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
    newsLetterContainer: {
        height: 340,
        margin: 15,
        marginTop: 20
    },
    heading:{
        fontSize: 24
    },
    textInputContainer: {
        flex: 0.65,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
        borderColor: 'black',
        borderWidth: 1,
        padding: 7
    },
    textInput:{
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        color: 'grey',
        borderRadius: 1
    },
    buttonContainer:{
        flex: 0.18,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconsContainer:{
        flex: 1,
        marginTop: 25,
        backgroundColor: '#f5f5f5',
        padding: 10,
        paddingTop: 30
    },
    iconsParent:{
        flex: 1,
        flexDirection: 'row',
    },
    iconImgContainer:{
        flex: 0.5
    },
    iconLabelContainer:{
        flex: 1, 
        alignItems: 'flex-start', 
        justifyContent: 'center'
    },
    iconLabel : {
        color: 'grey', 
        fontWeight: '100', 
        fontSize: 14, 
        lineHeight: 18 
    }
})

export default NewsLetter