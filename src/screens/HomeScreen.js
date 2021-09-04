import React from 'react';
import { Text, View, Image, ScrollView, StyleSheet, Platform } from 'react-native';
import mobileBanner from '../../assets/homepage/mobile-banner-new.jpg';
import HimHer from '../components/Homepage/HimHer';
import CouplesCarousel from '../components/Carousel/CouplesCarousel';
import CelebCarousel from '../components/Carousel/CelebCarousel';
import VirtualConsultant from '../components/Homepage/VirtualConsultant';
import Ideal from '../components/Homepage/Ideal';
import NewsLetter from '../components/Homepage/NewsLetter';
import Footer from '../components/Footer';
import { 
    himHerData, 
    diamondData, 
    couplesData, 
    celebData, 
    vcData, 
    ourProcessData, 
    ourGuaranteeData ,
    newsLetterData,
} from '../Static';

const HomeScreen = ({ navigation }) => {
    let isNotWeb = Platform.OS !== 'web'
    let SlickDiamond;
    if(isNotWeb){
        SlickDiamond = require('../components/Slick/SlickDiamond').default
    }

    return (
        <ScrollView style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        >
            <View style={styles.firstImgContainer}>
                <Image
                    style={styles.image}
                    resizeMode={'cover'}
                    source={mobileBanner}
                />
            </View>

            <HimHer himHerData={himHerData} navigation={navigation} />

            <View style={styles.diamondSlickContainer}>
                <Text style={styles.diamondSlickHeading}>
                    MEET OUR BEST SELLERS
                </Text>
                {
                    isNotWeb && <SlickDiamond img_data={diamondData}/>
                }
            </View>

            <View style={styles.CouplesCarouselContainer}>
                <CouplesCarousel img_data={couplesData}/>
            </View>

            <View style={styles.celebCarouselParentContainer}>
                <View style={styles.celebCarouselContainer}>
                    <CelebCarousel img_data={celebData}/>
                </View>
            </View>
            <View
                style={{
                    height: 25,
                    backgroundColor: 'white'
                }}
            >

            </View>

            <VirtualConsultant img_data={vcData} />

            <Ideal img={ourProcessData.img} title={ourProcessData.title} />
            <Ideal img={ourGuaranteeData.img} title={ourGuaranteeData.title} />

            <NewsLetter newsLetterData={newsLetterData}/>

            <Footer />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    firstImgContainer: {
        height: 380 
    },
    image: {
        alignSelf: 'center',
        height: '100%',
        width: '100%',
    },
    diamondSlickContainer: {
        height: 350,
        backgroundColor: 'white'
    },
    diamondSlickHeading : {
        textAlign: 'center', 
        fontSize: 20, 
        marginTop: 15
    },
    CouplesCarouselContainer: { 
        height: 420
    },
    celebCarouselParentContainer: {
        margin: 10,
        backgroundColor:'white'
    },
    celebCarouselContainer: {
        height: 410
    },
})

export default HomeScreen