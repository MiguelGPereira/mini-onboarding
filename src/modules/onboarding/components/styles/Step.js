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
    buttonView: {
        marginBottom: 30
    }
});

export default styles;