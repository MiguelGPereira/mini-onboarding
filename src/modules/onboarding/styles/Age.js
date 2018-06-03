import {
    StyleSheet,
    Dimensions
} from 'react-native';
import * as colors from './../../../constants/colors';

const styles = StyleSheet.create({
    input: {
        marginTop: 100,
        height: 35,
        lineHeight: 35,
        width: Dimensions.get('window').width * 0.90,
        borderBottomWidth: 1,
        borderColor: '#abadae',
        textAlign: 'center',
        fontSize: 29,
        fontWeight: 'bold',
        color: colors.PRIMARY_COLOR,
    },
});

export default styles;