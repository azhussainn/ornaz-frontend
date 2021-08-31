import * as React from 'react';
import { View, Text } from 'react-native';

function NotificationScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 26 }}>
            Notification Screen
        </Text>
      </View>
    );
}

export default NotificationScreen

