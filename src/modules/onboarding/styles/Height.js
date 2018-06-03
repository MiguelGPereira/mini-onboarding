import { 
    StyleSheet,
    Dimensions
 } from 'react-native';

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
        marginTop: 100,
        marginLeft: 10,
        marginRight: 10,
        height: 35,
        lineHeight: 35,
        width: Dimensions.get('window').width * 0.4,
        borderBottomWidth: 1,
        borderColor: '#abadae',
        textAlign: 'center',
        fontSize: 29,
        fontWeight: 'bold',
    },
    inputPlaceholder: {
        color: '#b6bbbf',
        transform: [
            { translateY: -20 },
            { translateX: 110 },
        ]
    },
});

export default styles;