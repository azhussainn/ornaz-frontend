import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import CartScreen from '../screens/CartScreen';
import NotificationScreen from '../screens/NotificationScreen';
import Header from '../components/Header';


const Drawer = createDrawerNavigator();

const DrawerComponent = ({ navigation }) => {
        return (
            <Drawer.Navigator initialRouteName="home">
                <Drawer.Screen name="Home" component={HomeScreen}
                    options={{
                        headerTitle: () => <Header />
                    }}
                />
                <Drawer.Screen name="Account" component={AccountScreen} 
                    options={{
                        headerTitle: () => <Header />
                    }}
                />
                <Drawer.Screen name="Cart" component={CartScreen} 
                    options={{
                        headerTitle: () => <Header />
                    }}
                />
                <Drawer.Screen name="Notification" component={NotificationScreen} 
                    options={{
                        headerTitle: () => <Header />
                    }}
                />
            </Drawer.Navigator>
        )
}


export default DrawerComponent