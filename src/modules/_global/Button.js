import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";

import styles from "./styles/Button";

const Button = ({ text, onPress, disabled }) => {
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

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
}

export default Button;