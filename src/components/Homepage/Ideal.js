import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import IdealTitle from './IdealTitle';

const Ideal = ({ img, title }) => {
    return (
        <>
            <View
            style={styles.idealImgContainer}
            >
                <Image 
                    source={img}
                    resizeMode={'cover'}
                    style={styles.image}
                />
            </View>
            <IdealTitle title={title} />
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        alignSelf: 'center',
        height: '100%',
        width: '100%',
    },
    idealImgContainer : {
        height: 400,
    }
})

export default Ideal