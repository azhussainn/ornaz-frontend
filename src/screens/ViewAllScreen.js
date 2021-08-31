import * as React from 'react';
import { Text, View } from 'react-native';


function ViewAllScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 26 }}>
            View All Screen
            </Text>
      </View>
    );
}

export default ViewAllScreen