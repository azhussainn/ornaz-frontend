import  React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { List } from 'react-native-paper';
import Currency from '../Currency';

export function DrawerContent({ navigation }){

    const [ currentCurrency, setCurrentCurrency ] = useState('INR')

    return(
        <List.Section style={styles.listContainer}>
            <List.Accordion
                title={<Text style={{ fontSize: 14 }}>Engagement Ring</Text>}
                style={[ styles.accordion, styles.border, { borderTopWidth: 1} ]}
                titleStyle={{
                    color: 'black'
                }}
            >
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ForHer')}
                    >
                        <List.Item title={<Text style={{ fontSize: 14 }}>For Her</Text>} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('ForHim')}
                    >
                        <List.Item title={<Text style={{ fontSize: 14 }}>For Him</Text>} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Rings')}
                    >
                        <List.Item title={<Text style={{ fontSize: 14 }}>Rings</Text>} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Bands')}
                    >
                        <List.Item title={<Text style={{ fontSize: 14 }}>Bands</Text>} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('ViewAll')}
                    >
                        <List.Item title={<Text style={{ fontSize: 14 }}>View All</Text>} />
                    </TouchableOpacity>
                    <View 
                        style={[styles.accordionBorder, { marginTop: 0 }]}
                    />
                </View>
            </List.Accordion>

            <TouchableOpacity
                onPress={() => navigation.navigate('DesignYourOwn')}
                style={[ styles.border]}
            >
                <List.Item title={<Text style={{ fontSize: 14 }}>Design your Own Engagement Ring</Text>} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('ReferYourFriends')}
                style={[ styles.border ]}
            >
                <List.Item title={<Text style={{ fontSize: 14 }}>Refer Your Friends</Text>} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('BookAppointement')}
                style={[ styles.border ]}
            >
                <List.Item title={<Text style={{ fontSize: 14 }}>Book An Appointment</Text>} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('TryAtHome')}
                style={[ styles.border ]}
            >
                <List.Item title={<Text style={{ fontSize: 14 }}>Try At Home For Free</Text>}/>
            </TouchableOpacity>

            <List.Accordion
                title={<Text style={{ fontSize: 14 }}>{currentCurrency}</Text>}
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
                style={[ styles.border ]}
            >
                <List.Item title={<Text style={{ fontSize: 14 }}>Contact Us</Text>} />
            </TouchableOpacity>

            <View
                style={styles.buttonContainer}
            >
                <TouchableOpacity
                    style={{flex: 1}}
                >
                    <Text
                        style={[styles.button, {backgroundColor: '#40e0d0'}]}
                    >
                        LOGOUT
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{flex: 1}}
                >
                    <Text
                        style={styles.button}
                    >
                        DASHBOARD
                    </Text>
                </TouchableOpacity>
            </View>

        </List.Section>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        marginTop: 39, 
        flex: 1,
    },
    border: {
        borderColor: '#e6e6e6',
        borderBottomWidth: 1,
    },
    accordion: {
        backgroundColor:'white',
        height: 48,
        justifyContent: 'center'
    },
    buttonContainer: {
        position: 'absolute', 
        bottom: 0,  
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        zIndex: 3,
        backgroundColor: 'white'
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
        flex: 1,
        borderColor: '#e6e6e6',
        borderBottomWidth: 1,
        marginTop: 15
    }
})