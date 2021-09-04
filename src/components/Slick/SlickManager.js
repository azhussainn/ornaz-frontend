import React from 'react';
import {View, Platform} from 'react-native';
import SlickDiamond from './SlickDiamond';

const SlickManager = ({ img_data }) => {
    if(Platform.OS !== 'web'){
        return <SlickDiamond img_data={img_data} />
    }else{
        return <View />
    }
}

export default SlickManager