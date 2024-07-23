import {
    Alert,
    SafeAreaView,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    View,
    Text
} from 'react-native';
import { Colors } from '../../../assets/styles/colors/colors';
import { styles } from './styles';
import { normalize } from '../../../lib/globals';

type DrawerComponentProps = {
    navigation: any;
};

const DrawerComponent: React.FC<DrawerComponentProps> = ({ navigation }) => {

    return (
        <SafeAreaView>
            <View
                style={{
                    height: normalize(50),
                    backgroundColor: Colors.white,
                    marginTop: normalize(-50),
                }}></View>
            <ScrollView>
                <StatusBar barStyle={'light-content'} />
                <View style={[styles.container]}>
                    <View style={styles.sideMenuHeader}>
                        <View style={styles.headerRow}>
                            <TouchableOpacity
                                style={styles.bluetoothContainer}
                                onPress={() => navigation.navigate('Bluetooth Monitor')}>
                                <View style={styles.blutoothTxtStyle}>
                                    <Text style={styles.blutoothName}  >
                                        Bluetooth Monitor
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.headerRow}>
                            <TouchableOpacity
                                style={styles.offlineContainer}
                                onPress={() => navigation.navigate('User Information')}>
                                <View style={styles.offlineTxtStyle}>
                                    <Text style={styles.offlineName}  >
                                        Offline
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )


}
export default DrawerComponent