import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    pill: {
        height: 30,
        width: 180,
        flexDirection: 'row',
        borderRadius: 25,
    },
    partial: {
        height: 30,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
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
        color: 'black',
        fontSize: 11,
        fontWeight: 'bold',
    },
    activeBackground: {
        backgroundColor: 'black',
    },
    activeText: {
        color: 'white'
    },
});

export default styles;