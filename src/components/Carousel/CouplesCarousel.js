import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
  Image
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import congrats from '../../../assets/homepage/couples/congrats.png';

const {width: windowWidth} = Dimensions.get('window');


const INITIAL_INDEX = 0;
export default function CouplesCarousel({ img_data }) {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);

  function handleCarouselScrollEnd(item, index) {
    setCurrentIndex(index);
  }

  function renderItem({item, index}) {
    const {img, name} = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}>
        <ImageBackground
            source={img} style={styles.imageBackground} 
        >
        </ImageBackground>
        <Text
            style={styles.text}
        >{name}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Carousel
        style={styles.carousel}
        data={img_data}
        renderItem={renderItem}
        itemWidth={windowWidth * 0.8}
        inActiveOpacity={0.9}
        containerWidth={windowWidth}
        onScrollEnd={handleCarouselScrollEnd}
        ref={carouselRef}
      />
      <View
        style={styles.infoContainerWrapper}
      >
        <View
            style={styles.infoContainer}
        >
            <Image 
                source={congrats}
                style={styles.congratsImg}
                resizeMode={'cover'}
            />
        </View>
        <Text
                style={styles.infoText}
        >#SheSaidYes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'white',
  },
  carousel: {
    aspectRatio: 1,
    marginTop: -10,
    zIndex: 1,
  },
  item: {
    flex: 1,
    marginHorizontal: 5
  },
  imageBackground: {
    flex: 1,
  },
  text: {
      textAlign: 'center',
      marginTop: 10,
      fontWeight:'700',
      letterSpacing: 2,
      color: '#454545'
  },
  infoContainerWrapper: {
    height: 150,
    backgroundColor:'#36c2c2',
    marginLeft: -10,
    marginRight: -10,
    marginTop: -80,
  },
  infoContainer:{
    width: 170,
    height: 70,
    marginTop: 60,
    marginLeft:30,
  },
  congratsImg:{
    alignSelf: 'center',
    height: '100%',
    width: '100%',
  },
  infoText:{
    color:'white',
    fontSize: 17,
    fontStyle: 'italic',
    fontWeight: '600',
    marginTop:-40,
    textAlign: 'right',
    marginRight: 45,
  }


});