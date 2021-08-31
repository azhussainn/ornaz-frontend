import * as React from 'react';
import { Text, View } from 'react-native';


function AccountScreen ({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 26 }}>
            Account Screen
        </Text>
      </View>
    );
}

export default AccountScreen 