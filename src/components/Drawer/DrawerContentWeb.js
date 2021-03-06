import  React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Currency from '../Currency';

const DrawerContentWeb = () => {

    const [ currentCurrency, setCurrentCurrency ] = useState('INR')
    const navigation = useNavigation();

    return(
        <View style={styles.listContainer}>
            <List.Accordion
                title=
                    {
                        <Text style={styles.text}>
                            Engagement Ring
                        </Text>
                    }
                style={[ styles.accordion, styles.border, { borderTopWidth: 0} ]}
                titleStyle={{
                    color: 'black'
                }}
            >
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ForHer')}
                        style={styles.accordionChildContainer}
                    >
                        <Text style={styles.text}>
                            For Her
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('ForHim')}
                        style={styles.accordionChildContainer}
                    >
                        <Text style={styles.text}>
                            For Him
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Rings')}
                        style={styles.accordionChildContainer}
                    >
                        <Text style={styles.text}>
                            Rings
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Bands')}
                        style={styles.accordionChildContainer}
                    >
                        <Text style={styles.text}>
                            Bands
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('ViewAll')}
                        style={styles.accordionChildContainer}
                    >
                        <Text style={styles.text}>
                            View All
                        </Text>
                    </TouchableOpacity>
                    <View 
                        style={[styles.accordionBorder, { marginTop: 0 }]}
                    />
                </View>
            </List.Accordion>

            <TouchableOpacity
                onPress={() => navigation.navigate('DesignYourOwn')}
                style={[ styles.border, styles.accordion, { paddingLeft: 15 }]}
            >
                <Text style={styles.text}>
                    Design your Own Engagement Ring
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('ReferYourFriends')}
                style={[ styles.border, styles.accordion, { paddingLeft: 15 } ]}
            >
                <Text style={styles.text}>
                    Refer Your Friends
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('BookAppointement')}
                style={[ styles.border, styles.accordion, { paddingLeft: 15 } ]}
            >
                <Text style={styles.text}>Book An Appointment</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('TryAtHome')}
                style={[ styles.border, styles.accordion, { paddingLeft: 15 } ]}
            >
                <Text style={styles.text}>Try At Home For Free</Text>
            </TouchableOpacity>

            <List.Accordion
                title=
                    {
                        <Text style={styles.text}>
                            {currentCurrency}
                        </Text>
                    }
                style={[ styles.accordion, styles.border ]}
                titleStyle={{
                    color: 'black'
                }}
            >
                <Currency currencyArr={[ "AUD", 'BDT', "GBP", "CAD", "EUR" ]}
                    navigation={navigation}
                    currentCurrency={currentCurrency}
                />
                <Currency currencyArr={[ "FJD", 'HKD', "INR", "KES", "MYR" ]}
                    navigation={navigation}
                    currentCurrency={currentCurrency}
                />
                <Currency currencyArr={[ "MVR", 'MUR', "NGN", "NAD", "NPR" ]}
                    navigation={navigation}
                    currentCurrency={currentCurrency}
                />
                <Currency currencyArr={[ "NZD", 'OMR', "PKR", "QR", "SAR" ]}
                    navigation={navigation}
                    currentCurrency={currentCurrency}
                />
                <Currency currencyArr={[ "SGD", 'ZAR', "LKR", "SEK", "CHF" ]}
                    navigation={navigation}
                    currentCurrency={currentCurrency}
                />
                <Currency currencyArr={[ "THB", 'AED', "USD", "JPY", "ZMK" ]}
                    navigation={navigation}
                    currentCurrency={currentCurrency}
                />
                <View 
                    style={styles.accordionBorder}
                />
            </List.Accordion>

            <TouchableOpacity
                onPress={() => navigation.navigate('ContactUs')}
                style={[ styles.border, styles.accordion, { paddingLeft: 15 } ]}
            >
                <Text style={styles.text}>
                    Contact Us
                </Text>
            </TouchableOpacity>

            <View
                style={styles.buttonContainer}
            >
                <TouchableOpacity
                    style={styles.buttonParent}
                >
                    <Text
                        style={[styles.button, {backgroundColor: '#40e0d0'}]}
                    >
                        LOGOUT
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonParent}
                >
                    <Text
                        style={styles.button}
                    >
                        DASHBOARD
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        marginTop: 16, 
        flex: 1,
    },
    border: {
        borderColor: '#e6e6e6',
        borderBottomWidth: 1,
    },
    accordion: {
        backgroundColor:'white',
        height: 48,
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'flex-end',
        zIndex: 3,
        backgroundColor: 'white',
    },
    button: {
        borderColor: '#c9c9c9', 
        borderWidth: 1,  
        height: 35, 
        textAlign: 'center', 
        borderRadius: 7, 
        paddingTop: 7, 
        fontWeight: 'bold'
    },
    accordionBorder: {
        borderColor: '#e6e6e6',
        borderBottomWidth: 1,
    },
    accordionChildContainer:{
        height: 30,
        justifyContent: 'center',
        paddingLeft: 20,
        marginVertical: 3
    },
    text: {
        fontSize: 14
    },
    buttonParent: {
        flex: 1
    }
})

export default DrawerContentWeb