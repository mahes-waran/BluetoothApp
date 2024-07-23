import React from 'react';

import { StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import UserInfo from '../../screens/Offline/UserInfo';
import { Colors } from '../../../assets/styles/colors/colors';
import DrawerComponent from './drawerComponent';
import BluetoothMonitor from '../../screens/Bluetooth/BluetoothMonitor';


export default () => {
    const Drawer = createDrawerNavigator()
    return (
        <>
            <StatusBar
                barStyle={'dark-content'}
                translucent
                backgroundColor={'#00000031'}
            />
            <Drawer.Navigator initialRouteName="Bluetooth Monitor"
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: Colors.white,
                        width: '80%',

                    },
                }}
                drawerContent={(props) => <DrawerComponent {...props} />}
            >
                <Drawer.Screen name="Bluetooth Monitor" component={BluetoothMonitor} />
                <Drawer.Screen name="User Information" component={UserInfo} />
            </Drawer.Navigator>
        </>
    )

}