import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const scale = SCREEN_WIDTH / 410;

export function normalize(size: number) {
    const newSize = size * scale;

    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
}

export const fontFamily = {
    regular: 'OpenSans-Regular',
    black: 'OpenSans-Bold',
    extraBold: 'OpenSans-ExtraBold',
    extraLight: 'OpenSans-Light',
    light: 'OpenSans-Light',
    bold: 'OpenSans-Bold',
    medium: 'OpenSans-Medium',
    semiBold: 'OpenSans-SemiBold',
    thin: 'OpenSans-Light',
    italic: 'OpenSans-Italic',
    boldItalic: 'OpenSans-BoldItalic',
    lightItalic: 'OpenSans-LightItalic',
    extraBoldItalic: 'OpenSans-ExtraBoldItalic',
    mediumItalic: 'OpenSans-MediumItalic',
    semiBoldItalic: 'OpenSans-SemiBoldItalic',
};

export const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};