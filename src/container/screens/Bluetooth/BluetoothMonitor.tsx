import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    Image
} from 'react-native';
import { faker } from '@faker-js/faker';

import { Colors } from '../../../assets/styles/colors/colors';
import { fontFamily } from '../../../lib/globals';
import BluetoothStateManager from 'react-native-bluetooth-state-manager';
import Spinner from 'react-native-loading-spinner-overlay';


interface UserData {
    userId: string;
    username: string;
    email: string;
    password: string;
    birthdate: Date;
    registeredAt: Date;
    avatar: string;
    temperature: number;
    humidity: number;
    timestamp: Date;
}

const BluetoothMonitor: React.FC = () => {
    const [data, setData] = useState<UserData[]>([]);
    const [loading, setLoading] = useState(false);

    const generateMockData = (): UserData[] => {
        return Array.from({ length: 20 }, () => ({
            userId: faker.datatype.uuid(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            registeredAt: faker.date.past(),
            avatar: faker.image.avatar(),
            temperature: faker.number.float({ min: 20, max: 30, precision: 0.1 }),
            humidity: faker.number.float({ min: 30, max: 70, precision: 0.1 }),
            timestamp: faker.date.recent(),
        }));
    };

    useEffect(() => {
        requestToEnable()
    }, []);

    const requestToEnable = async () => {
        BluetoothStateManager.getState().then(async (bluetoothState) => {
            if (bluetoothState === 'PoweredOff') {
                try {
                    await BluetoothStateManager.requestToEnable()
                    setLoading(true);
                    getMockData()
                } catch (err) {
                    setLoading(false);
                    console.log(err)
                    console.log('BluetoothStateManager:', JSON.stringify(err))
                }
            } else {
                getMockData()
            }
        });
    }

    const getMockData = () => {
        setData(generateMockData());
        setLoading(false);
    }

    const renderItem = ({ item }: { item: UserData }) => (
        <View style={styles.itemContainer}>
            <TouchableOpacity
                activeOpacity={5}
                onPress={() => { }}
                style={styles.cardContainer}
            >
                <View style={styles.imgContainer}>
                    <View>
                        <Image source={{ uri: item.avatar }} style={styles.avatar} />
                    </View>
                    <View style={styles.userTxt}>
                        <Text style={styles.username}>{item.username}</Text>
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.infoTxt}>Email: {item.email}</Text>
                    <Text style={styles.infoTxt}>Password: {item.password}</Text>
                    <Text style={styles.infoTxt}>Birthdate: {item.birthdate.toDateString()}</Text>
                    <Text style={styles.infoTxt}>Registered At: {item.registeredAt.toDateString()}</Text>
                    <Text style={styles.infoTxt}>Temperature: {item.temperature}°C</Text>
                    <Text style={styles.infoTxt}>Humidity: {item.humidity}%</Text>
                    <Text style={styles.infoTxt}>Timestamp: {item.timestamp.toDateString()}</Text>
                    <Text style={styles.infoTxt}>User ID: {item.userId}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Spinner
                    visible={loading}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                />
                {data ? (
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.userId}
                        ItemSeparatorComponent={() => null}
                    />) : (<Text style={styles.username}>No Records Found</Text>)}
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        backgroundColor: Colors.white
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    cardContainer: {
        borderColor: Colors.lightGray,
        backgroundColor: Colors.white,
        width: '100%',
        height: 250,
        borderRadius: 3,
        borderWidth: 2,
        opacity: 2
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    imgContainer: {
        flexDirection: 'row',
        padding: 10
    },
    userTxt: {
        paddingTop: 10
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: 15
    },
    infoTxt: {
        fontSize: 12,
        fontFamily: fontFamily.regular,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    username: {
        fontSize: 18,
        fontFamily: fontFamily.semiBold,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    loadingTxt: {
        fontSize: 18,
        fontFamily: fontFamily.semiBold,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.black
    },
    spinnerTextStyle: {
        color: '#FFF',
    },
});

export default BluetoothMonitor