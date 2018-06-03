import { 
    StyleSheet,
    Dimensions
 } from 'react-native';

const styles = StyleSheet.create({
    inputSection: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    inputView: {

    },
    input: {
        marginTop: 100,
        height: 35,
        lineHeight: 35,
        width: Dimensions.get('window').width * 0.5,
        borderBottomWidth: 1,
        borderColor: '#abadae',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    inputPlaceholder: {
        color: '#b6bbbf',
    },
    inputPlaceholderMetric: {
        transform: [
            { translateY: -20 },
            { translateX: 130 },
        ]
    },
    inputPlaceholderImperial: {
        transform: [
            { translateX: 120 },
        ]
    }
});

export default styles;