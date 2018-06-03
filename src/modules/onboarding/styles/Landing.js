import { StyleSheet } from 'react-native';

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
        marginTop: 50,
    },
    logoLabel: {
        marginTop: 18,
        fontSize: 12,
        fontWeight: 'bold'
    },
    scrollView: {
        marginTop: 35,
    },
});

export default styles;