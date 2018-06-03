import { StyleSheet } from 'react-native';
import * as colors from './../../../constants/colors';

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: colors.PRIMARY_COLOR,
        borderRadius: 25,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    disabled: {
        backgroundColor: '#a9abac',
    },
    buttonText: {
        paddingLeft: 30,
        paddingRight: 30,
        lineHeight: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    }
});

export default styles;