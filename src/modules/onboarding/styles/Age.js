import { 
    StyleSheet,
    Dimensions
 } from 'react-native';

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
    },
});

export default styles;