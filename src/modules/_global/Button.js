import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import styles from './styles/Button';

class Button extends Component {
    render() {
        const { text, onPress, disabled } = this.props;
        const isDisabled = disabled != undefined ? disabled : false;
        const buttonStyle = !isDisabled
            ? styles.container
            : [styles.container, styles.disabled];

        return (
            <TouchableOpacity onPress={onPress} disabled={isDisabled}>
                <View style={buttonStyle}>
                    <Text style={styles.buttonText}>{text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default Button;