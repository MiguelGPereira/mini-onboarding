import { StyleSheet } from 'react-native';
import * as colors from './../../../../constants/colors';

const styles = StyleSheet.create({
    pill: {
        height: 33,
        width: 183,
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: colors.PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    partial: {
        height: 30,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.PRIMARY_COLOR,
        backgroundColor: 'white',
    },
    left: {
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    }, 
    right: {
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    },
    text: {
        color: colors.PRIMARY_COLOR,
        fontSize: 11,
        fontWeight: 'bold',
    },
    activeBackground: {
        backgroundColor: colors.PRIMARY_COLOR,
    },
    activeText: {
        color: 'white'
    },
});

export default styles;