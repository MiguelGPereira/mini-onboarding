import {
    StyleSheet,
    Dimensions
} from 'react-native';
import * as colors from './../../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    leftBg: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        flex: 1,
        justifyContent: 'center',
    },
    rightBg: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 10,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    dumbbell: {
        zIndex: 1,
        transform: [{
            translateY: 50
        }]
    },
    logo: {
        position: 'absolute',
        width: 22,
        height: 44,
        top: Dimensions.get('window').height / 2 - 44 / 2,
        left: Dimensions.get('window').width / 2 - 22 / 2,
    },
    logoLabel: {
        marginTop: 18,
        fontSize: 12,
        fontWeight: 'bold',
        color: colors.PRIMARY_COLOR,
    },
    content: {
        marginTop: 80,
        alignItems: 'center'
    },
    scrollView: {
        marginTop: 35,
    },
});

export default styles;