import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import DeviceModal from '../../../components/DeviceConnectionModal';
import PulseIndicator from '../../../components/PulseIndicator';
import useBLE from '../../../hooks/useBLE';
import BluetoothStateManager from 'react-native-bluetooth-state-manager';
import { Colors } from '../../../assets/styles/colors/colors';
import { fontFamily } from '../../../lib/globals';

const BluetoothMonitor = () => {
    const {
        requestPermissions,
        scanForPeripherals,
        allDevices,
        connectToDevice,
        connectedDevice,
        heartRate,
        disconnectFromDevice,
    } = useBLE();
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    console.log("connectedDevice:", connectedDevice)
    //console.log("allDevices:", allDevices)
    console.log("heartRate:", heartRate)
    console.log("isModalVisible:", isModalVisible)

    const scanForDevices = () => {
        requestPermissions(isGranted => {
            if (isGranted) {
                scanForPeripherals();
            }
        })
    };

    const hideModal = () => {
        setIsModalVisible(false);
    };

    const openModal = async () => {
        scanForDevices();
        setIsModalVisible(true);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.heartRateTitleWrapper}>
                {connectedDevice ? (
                    <>
                        <PulseIndicator />
                        <Text style={styles.heartRateTitleText}>Your Heart Rate Is:</Text>
                        <Text style={styles.heartRateText}>{heartRate} bpm</Text>
                    </>
                ) : (
                    <Text style={styles.heartRateTitleText}>
                        Please Connect to a Heart Rate Monitor
                    </Text>
                )}
            </View>
            <TouchableOpacity
                onPress={connectedDevice ? disconnectFromDevice : openModal}
                style={styles.ctaButton}>
                <Text style={styles.ctaButtonText}>
                    {connectedDevice ? 'Disconnect' : 'Connect'}
                </Text>
            </TouchableOpacity>
            <DeviceModal
                closeModal={hideModal}
                visible={isModalVisible}
                connectToPeripheral={connectToDevice}
                devices={allDevices}
            />
        </SafeAreaView>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.lightWhite,
    },
    heartRateTitleWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heartRateTitleText: {
        fontFamily: fontFamily.semiBold,
        fontSize: 25,
        textAlign: 'center',
        marginHorizontal: 20,
        color: Colors.black,
    },
    heartRateText: {
        fontSize: 25,
        marginTop: 15,
    },
    ctaButton: {
        backgroundColor: Colors.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginHorizontal: 20,
        marginBottom: 5,
        borderRadius: 8,
    },
    ctaButtonText: {
        fontSize: 18,
        fontFamily: fontFamily.semiBold,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default BluetoothMonitor