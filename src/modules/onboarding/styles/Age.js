import { 
    StyleSheet,
    Dimensions
 } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    formView: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
    },
    input: {
        marginTop: 100,
        height: 35,
        lineHeight: 35,
        width: Dimensions.get('window').width * 0.90,
        borderBottomWidth: 1,
        borderColor: '#abadae',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    buttonView: {
        marginBottom: 30
    }
});

export default styles;