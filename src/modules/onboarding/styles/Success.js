import {
    StyleSheet,
    Dimensions
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
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
        left: -30,
        bottom: -220,
        flex: 1,
        justifyContent: 'flex-end',
    },
    rightBg: {
        position: 'absolute',
        top: 30,
        right: 0,
        bottom: 0,
        flex: 1,
        justifyContent: 'flex-start',
    },
    top: {
        alignItems: 'center',
        marginTop: 60,
    },
    details: {
        alignItems: 'flex-end',
        marginTop: 30,
        backgroundColor: 'white',
        borderColor: '#dddddd',
        borderWidth: 1,
        borderRadius: 10,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        width: Dimensions.get('window').width * 0.90,
    },
    title: {
        marginLeft: 15,
        fontSize: 15,
    },
    value: {
        marginRight: 15,
        fontSize: 15,
        color: '#626466'
    },
    separator: {
        width: Dimensions.get('window').width * 0.85,
        height: 1,
        backgroundColor: '#f1f1f1'
    },
    bottom: {
        marginBottom: 30
    }
});

export default styles;