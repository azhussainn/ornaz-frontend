import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './DrawerContent';
import Header from '../../components/Header';
import HomeScreen from '../../screens/HomeScreen';
import CartScreen from '../../screens/CartScreen';
import ForHerScreen from '../../screens/ForHerScreen';
import ForHimScreen from '../../screens/ForHimScreen';
import RingsScreen from '../../screens/RingsScreen';
import BandsScreen from '../../screens/BandsScreen';
import ViewAllScreen from '../../screens/ViewAllScreen';
import DesignYourOwnEngagementRingScreen from '../../screens/DesignYourOwnEngagementRingScreen';
import ReferYourFriendsScreen from '../../screens/ReferYourFriendsScreen';
import BookAnAppointementScreen from '../../screens/BookAnAppointementScreen';
import TryAtHomeForFreeScreen from '../../screens/TryAtHomeForFreeScreen';
import ContactUsScreen from '../../screens/ContactUsScreen';


const Drawer = createDrawerNavigator();

const DrawerComponent = ({ navigation }) => {
        return (
            <Drawer.Navigator initialRouteName="home"
                drawerContent={ (props) => <DrawerContent { ...props } /> }
            >
                <Drawer.Screen name="Home" component={HomeScreen}
                    options={{
                        headerTitle: () => <Header />
                    }}
                />
                <Drawer.Screen name="Cart" component={CartScreen} 
                    options={{
                        headerTitle: () => <Header />
                    }}
                />
                <Drawer.Screen name="ForHer" component={ForHerScreen} 
                    options={{
                        headerTitle: () => <Header />
                    }}
                />
                <Drawer.Screen name="ForHim" component={ForHimScreen} 
                    options={{
                        headerTitle: () => <Header />
                    }}
                />
                <Drawer.Screen name="Rings" component={RingsScreen} 
                    options={{
                        headerTitle: () => <Header />
                    }}
                />
                <Drawer.Screen name="Bands" component={BandsScreen} 
                    options={{
                        headerTitle: () => <Header />
                    }}
                />
                <Drawer.Screen name="ViewAll" component={ViewAllScreen} 
                    options={{
                        headerTitle: () => <Header />
                    }}
                />
                <Drawer.Screen name="DesignYourOwn" component={DesignYourOwnEngagementRingScreen} 
                    options={{
                        headerTitle: () => <Header />
                    }}
                />
                <Drawer.Screen name="ReferYourFriends" component={ReferYourFriendsScreen} 
                    options={{
                        headerTitle: () => <Header />
                    }}
                />
                <Drawer.Screen name="BookAppointement" component={BookAnAppointementScreen} 
                    options={{
                        headerTitle: () => <Header />
                    }}
                />
                <Drawer.Screen name="TryAtHome" component={TryAtHomeForFreeScreen} 
                    options={{
                        headerTitle: () => <Header />
                    }}
                />
                <Drawer.Screen name="ContactUs" component={ContactUsScreen} 
                    options={{
                        headerTitle: () => <Header />
                    }}
                />
            </Drawer.Navigator>
        )
}


export default DrawerComponent