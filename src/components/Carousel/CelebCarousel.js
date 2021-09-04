import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
  Platform
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';


const {width: windowWidth} = Dimensions.get('window');
const INITIAL_INDEX = 0;

export default function CouplesCarousel({ img_data }) {

  const isWeb = Platform.OS === 'web'
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
        <View
            style={styles.textContainer}
        >
            <Text
                style={styles.text}
            >{name}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={
        isWeb ? [styles.container, {flex: 1}]
        : styles.container
    }>
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
        <Text
                style={styles.infoText}
        >CELEBRITY TAKEOVER</Text>
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
  textContainer:{
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -5,
    marginLeft: -3,
  },
  text: {
      textAlign: 'center',
      marginTop: 10,
      fontWeight:'700',
      letterSpacing: 2,
      color: '#454545',
      backgroundColor:'white',
      fontSize:17,
      padding: 20,
      paddingTop: 8
  },
  infoContainerWrapper: {
    height: 150,
    backgroundColor:'#36c2c2',
    marginLeft: -10,
    marginRight: -10,
    marginTop: -80,
  },
  infoText:{
    fontSize: 16,
    fontWeight: '700',
    marginTop:100,
    textAlign: 'right',
    marginRight: 45,
    color: '#454545',
  }

});