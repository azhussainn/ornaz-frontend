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
    testamonialData,
    googleReview
} from '../Static';

const HomeScreen = ({ navigation }) => {
    let isNotWeb = Platform.OS !== 'web'
    let SlickDiamond;
    if(isNotWeb){
        SlickDiamond = require('../components/Slick/SlickDiamond').default
        SlickReviews = require('../components/Slick/SlickReviews').default
    }

    return (
        <ScrollView style={styles.mainContainer}
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
                    isNotWeb ? <SlickDiamond img_data={diamondData}/>
                    : <View
                        style={{ flex: 1, backgroundColor: 'black' }}
                    ></View>
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
            <View style={styles.vcContainerMargin} />
            <VirtualConsultant img_data={vcData} />

            <Ideal img={ourProcessData.img} title={ourProcessData.title} />
            <Ideal img={ourGuaranteeData.img} title={ourGuaranteeData.title} />

            <View style={styles.reviewContainer}>
                <View style={styles.reviewContainerMargin}/>
                {
                    isNotWeb && <SlickReviews img_data={testamonialData} googleReviewImg={googleReview} />
                }
            </View>

            <NewsLetter newsLetterData={newsLetterData}/>

            <Footer />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1 
    },
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
    vcContainerMargin:{
        height: 25, 
        backgroundColor: 'white'
    },
    celebCarouselContainer: {
        height: 410
    },
    reviewContainer: {
        height: 550,
        backgroundColor: 'white'
    },
    reviewContainerMargin:{
        height: 60
    }
})

export default HomeScreen