import * as React from 'react';
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';
import mobileBanner from '../../assets/homepage/mobile-banner-new.jpg';
import forHer from '../../assets/homepage/for-her.jpg';
import forHim from '../../assets/homepage/for-him.jpg';
// import SlickDiamond from '../components/Slick/SlickDiamond';
import CouplesCarousel from '../components/Carousel/CouplesCarousel';
import CelebCarousel from '../components/Carousel/CelebCarousel';

import Serena from '../../assets/homepage/rings/Serena.png';
import Brenda from '../../assets/homepage/rings/Brenda.png';
import Rachell from '../../assets/homepage/rings/Rachell.png';
import Beryl from '../../assets/homepage/rings/Beryl.png';
import Fervid from '../../assets/homepage/rings/Fervid.png';
import Plum from '../../assets/homepage/rings/Plum.png';
import Drift from '../../assets/homepage/rings/Drift.png';
import Liam from '../../assets/homepage/rings/Liam.png';
import Levi from '../../assets/homepage/rings/Levi.png';
import Twirl from '../../assets/homepage/rings/Twirl.png';

import epiChristopher from '../../assets/homepage/couples/epi-christopher.jpg';
import kanikAakarsh from '../../assets/homepage/couples/kanika-akarsh.jpg';
import kiranShashank from '../../assets/homepage/couples/kiran-shashank.jpg';
import nishaPrashant from '../../assets/homepage/couples/nisha-prashant.jpg';
import prachiHarsh from '../../assets/homepage/couples/prachi-harsh.jpg';
import rangolieRajat from '../../assets/homepage/couples/rangolie-rajat.jpg';
import sanaAnas from '../../assets/homepage/couples/sana-anas.jpg';
import tanviAbhay from '../../assets/homepage/couples/tanvi-abhay.jpg';
import vrindaKaustav from '../../assets/homepage/couples/vrinda-kaustav.jpg';

import nushratBarucha from '../../assets/homepage/celebs/nushrat-barucha.jpg';
import gauharKhan from '../../assets/homepage/celebs/gauhar-khan.jpg';
import himanshiKhurana from '../../assets/homepage/celebs/himanshi-khurana.jpg';
import kishwerMerchant from '../../assets/homepage/celebs/kishwer-merchant.jpg';
import krystleDsouza from '../../assets/homepage/celebs/krystle-dsouza.jpg';
import nitibhaKaul from '../../assets/homepage/celebs/nitibha-kaul.jpg';

import vcPhone from '../../assets/homepage/virtual_consultant/vc-phone.jpg';
import vcComputer from '../../assets/homepage/virtual_consultant/vc-computer.jpg';
import vcTablet from '../../assets/homepage/virtual_consultant/vc-tablet.jpg';

import ourProcess from '../../assets/homepage/our-process.jpg';
import ourGuarantee from '../../assets/homepage/our-guarantee.jpg';



function HomeScreen({ navigation }) {

    return (
      <ScrollView style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
          <View
            style={styles.firstImgContainer}
          >
            <Image
                style={styles.image}
                resizeMode={'cover'}
                source={mobileBanner}
            />
          </View>
          <View
            style={styles.himHerParentContainer}
          >

            <View
                style={styles.himHerImageContainer}
            >
                <View
                    style={[styles.genderImageContainer, {marginRight: 10}]}
                >
                    <Image
                        style={styles.image}
                        resizeMode={'cover'}
                        source={forHer}
                    />
                </View>
                <View
                    style={[styles.genderImageContainer, {marginLeft: 10}]}
                >
                    <Image
                        style={styles.image}
                        resizeMode={'cover'}
                        source={forHim}
                    />
                </View>
            </View>
            <View
                style={styles.himHerTextContainer}
            >
                <Text
                    style={[styles.himHerText, { marginRight: 30}]}
                >FOR HER</Text>
                <Text
                    style={[styles.himHerText, { marginLeft: 30}]}
                >FOR HIM</Text>
            </View>
            
          </View>
          <View 
            style={styles.diamondSlickContainer}
          >
              <Text
                style={styles.diamondSlickHeading}
              >MEET OUR BEST SELLERS</Text>
            {/* <SlickDiamond img_data={[ 
                        { img: Serena, info: "Plain Band Six Prong Engagement Ring", name: 'Serena' },
                        { img: Brenda, info: "Double Halo Engagement Ring", name: 'Brenda' },
                        { img: Rachell, info: "Pave Diamond Band Engagement Ring", name: 'Rachell' },
                        { img: Beryl, info: "Vintage Single Halo Engagement Ring", name: 'Beryl' },
                        { img: Fervid, info: "Infinity Band Halo Engagement Ring", name: 'Fervid' },
                        { img: Plum, info: "Single Halo Engagement Ring", name: 'Plum' },
                        { img: Drift, info: "Channel Set Engagement Ring", name: 'Drift' },
                        { img: Liam, info: "Infinity Band Hidden Halo Engagement Ring", name: 'Liam' },
                        { img: Levi, info: "Split Band Halo Engagement Ring", name: 'Levi' },
                        { img: Twirl, info: "Vintage Band Engagement Ring", name: 'Twirl' }
                    ]
                }
            /> */}
        </View>
        <View
            style={styles.CouplesCarouselContainer}
        >
            <CouplesCarousel img_data={[
                  {
                    img: epiChristopher,
                    name: 'EPI & CHRISTOPHER',
                  },
                  {
                    img: kanikAakarsh,
                    name: 'KANIKA & AKARSH',
                  },
                  {
                    img: kiranShashank,
                    name: 'KIRAN & SHASHANK',
                  },
                  {
                    img: nishaPrashant,
                    name: 'NISHA & PRASHANT',
                  },
                  {
                    img: prachiHarsh,
                    name: 'PRACHI & HARSH',
                  },
                  {
                    img: rangolieRajat,
                    name: 'RANGOLIE & RAJAT',
                  },
                  {
                    img: sanaAnas,
                    name: 'SANA & ANAS',
                  },
                  {
                    img: tanviAbhay ,
                    name: 'TANVI & ABHAY',
                  },
                  {
                    img: vrindaKaustav,
                    name: 'VRINDA & KAUSTAV',
                  }
            ]}/>
        </View>
        <View 
            style={styles.celebCarouselParentContainer}
        />
        <View
            style={styles.celebCarouselContainer}
        >
            <CelebCarousel img_data={[
                  {
                    img: nushratBarucha,
                    name: 'NUSRAT BARUCHA',
                  },
                  {
                    img: gauharKhan,
                    name: 'GAUHAR KHAN',
                  },
                  {
                    img: himanshiKhurana,
                    name: 'HIMANSHI KHURANA',
                  },
                  {
                    img: kishwerMerchant,
                    name: 'KISHWER MERCHANT',
                  },
                  {
                    img: krystleDsouza,
                    name: "KRYSTLE D'SOUZA",
                  },
                  {
                    img: nitibhaKaul,
                    name: 'NITIBHA KAUL',
                  }
            ]}/>
        </View>
        <View
            style={styles.vcContainer}
        >
            <View
                style={styles.vcContainerInner}
            >
                <View
                    style={styles.vcImageContainer}
                >
                    <Image 
                        source={vcPhone}
                        resizeMode={'cover'}
                        style={styles.image}
                    />
                </View>

                <View
                    style={styles.vcTextContainer}
                >
                    <Text
                        style={styles.vcTextUp}
                    >Select Your</Text>
                    <Text
                        style={styles.vcText}
                    >Diamond Size</Text>
                </View>

            </View>
            <View
               style={styles.vcContainerInner}
            >
                <View
                    style={styles.vcTextContainer}
                >
                    <Text
                        style={styles.vcTextUp}
                    >Choose Your</Text>
                    <Text
                        style={styles.vcText}
                    >Engagement Ring</Text>
                    <Text
                        style={styles.vcText}
                    >Design Amongst</Text>
                    <Text
                        style={styles.vcText}
                    >Different Settings</Text>
                </View>

                <View
                    style={styles.vcImageContainer}
                >
                    <Image 
                        source={vcComputer}
                        resizeMode={'cover'}
                        style={styles.image}
                    />
                </View>
            </View>
            <View
                style={styles.vcContainerInner}
            >
                <View
                    style={styles.vcImageContainer}
                >
                    <Image 
                        source={vcTablet}
                        resizeMode={'cover'}
                        style={styles.image}
                    />
                </View>

                <View
                    style={styles.vcTextContainer}
                >
                    <Text
                        style={styles.vcText}
                    >Customize Your</Text>
                    <Text
                        style={styles.vcText}
                    >Design With Our</Text>
                    <Text
                        style={styles.vcText}
                    >Stylists & Experts</Text>
                </View>
            </View>
        </View>
        <View 
            style={styles.ideals}
            >
                <Text
                    style={styles.idealText}
                >
                    VIRTUAL CONSULTANT
                </Text>
            </View>
            <View
                style={styles.idealImgContainer}
            >
                <Image 
                    source={ourProcess}
                    resizeMode={'cover'}
                    style={styles.image}
                />
            </View>
            <View 
                style={styles.ideals}
            >
                <Text
                    style={styles.idealText}
                >
                    OUR PROCESS
                </Text>
            </View>

            <View
                style={styles.idealImgContainer}
            >
                <Image 
                    source={ourGuarantee}
                    resizeMode={'cover'}
                    style={styles.image}
                />
            </View>
            <View 
                style={styles.ideals}
            >
                <Text
                    style={styles.idealText}
                >
                    OUR GURANTEES
                </Text>
            </View>
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
    himHerParentContainer: {
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
    vcContainer: {
        height: 470,
        backgroundColor: 'white'
    },
    vcContainerInner: {
        flex: 1,
        flexDirection: 'row',
    },
    vcImageContainer: {
        flex: 1,
        marginTop: -25
    },
    vcTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    vcText:{
        fontSize: 15
    },
    vcTextUp: {
        fontSize: 15,
        marginTop: -25 
    },
    ideals:{
        backgroundColor: '#45d4d5',
        flexDirection: 'row',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -1
    },
    idealText:{
        fontSize: 15,
        color: 'white',
        fontWeight: '700'
    },
    idealImgContainer : {
        height: 400,
    }
})

export default HomeScreen