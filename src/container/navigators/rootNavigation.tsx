
import React, { useEffect } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { blueTheme } from '../../assets/styles/colors/themeColors';
import Drawer from './Drawer';
import BluetoothStateManager from 'react-native-bluetooth-state-manager';
import { queryAllRealmObject } from '../../database';
import { USERINFO } from '../../database/allSchemas';
import { useNetInfo } from '../../hooks/useNetInfo';

const RootNavigation = () => {
    const { isConnected } = useNetInfo();

    useEffect(() => {
        requestToEnable()
    }, [])

    const requestToEnable = async () => {
        BluetoothStateManager.getState().then(async (bluetoothState) => {
            if (bluetoothState === 'PoweredOff') {
                try {
                    await BluetoothStateManager.requestToEnable()
                } catch (err) {
                    console.log(err)
                    console.log('BluetoothStateManager:', JSON.stringify(err))
                }
            }
        });
    }

    useEffect(() => {
        fetchDataRealm();
    }, []);

    const fetchDataRealm = () => {
        queryAllRealmObject(USERINFO)
            .then((data: any) => {
                const res: any = data[0]
                let userInfo = {
                    id: res.id,
                    FirstName: res.firstName,
                    LastName: res.lastName,
                    Email: res.email,
                    Title: res.title,
                    MobileNumber: res.mobileNumber,
                    age: res.age,
                    time: res.time,
                }
                // console.log('fetchDataRealm:', userInfo)
                if (isConnected) {
                    //Sync FetchAPI
                }
            });
    }

    const Blue = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            ...blueTheme,
        },
    };

    const getTheme = () => {
        return Blue;
    };

    const themeMode = getTheme();

    return (
        <NavigationContainer theme={themeMode}>
            <Drawer />
        </NavigationContainer>
    );
}
export default RootNavigation