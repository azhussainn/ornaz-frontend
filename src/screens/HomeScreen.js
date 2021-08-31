import * as React from 'react';
import { Text, View } from 'react-native';


function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 26 }}>
            Home Screen
            </Text>
      </View>
    );
}

export default HomeScreen