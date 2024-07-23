import { Platform, StyleSheet } from 'react-native';
import { fontFamily, normalize } from '../../../lib/globals';
import { Colors } from '../../../assets/styles/colors/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sideMenuHeader: {
        flex: normalize(0.2),
        justifyContent: 'center',
        paddingTop: Platform.OS === 'ios' ? normalize(10) : normalize(25),
        backgroundColor: Colors.lightBackground,
        paddingVertical: normalize(20),
        padding: normalize(15),
        height:'100%',
    },
    headerRow: {
        flexDirection: 'row',
        marginTop: normalize(40),
        justifyContent: 'space-between',
    },
    bluetoothContainer: {
        flexDirection: 'row',
        flex: 2,
        borderBottomColor: Colors.black
    },
    blutoothTxtStyle: {
        paddingHorizontal: normalize(12),
        flexShrink: 1,
        paddingVertical: normalize(5),
    },
    blutoothName: {
        fontSize: normalize(20),
        color: Colors.darkestBlue,
        fontFamily: fontFamily.bold,
        alignItems: 'flex-start'
    },
    offlineContainer: {
        flexDirection: 'row',
        flex: 2,
        borderBottomColor: Colors.black
    },
    offlineTxtStyle: {
        paddingHorizontal: normalize(12),
        flexShrink: 1,
        paddingVertical: normalize(5),
    },
    offlineName: {
        fontSize: normalize(20),
        color: Colors.darkestBlue,
        fontFamily: fontFamily.bold,
        alignItems: 'flex-start'
    },

})


