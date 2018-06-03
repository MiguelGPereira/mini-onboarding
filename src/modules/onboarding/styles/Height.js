import {
    StyleSheet,
    Dimensions
} from 'react-native';
import * as colors from './../../../constants/colors';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    inputSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15
    },
    input: {
        marginTop: Dimensions.get('window').height * (1/15),
        marginLeft: 10,
        marginRight: 10,
        lineHeight: 35,
        width: Dimensions.get('window').width * 0.4,
        borderBottomWidth: 1,
        borderColor: '#abadae',
        textAlign: 'center',
        fontSize: 29,
        fontWeight: 'bold',
        color: colors.PRIMARY_COLOR,
    },
    inputPlaceholder: {
        color: '#b6bbbf',
        transform: [
            { translateY: -20 },
            { translateX: Dimensions.get('window').width * 0.32 },
        ]
    },
});

export default styles;