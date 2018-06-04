import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";

import styles from "./styles/Pill";

class Pill extends Component {
    constructor(props) {
        super(props);

        this.state = {
            left: props.left,
            right: props.right,
            active: props.init
        }
    }

    _didTapLeft(action) {
        action();
        this.setState({ active: this.state.left });
    }

    _didTapRight(action) {
        action();
        this.setState({ active: this.state.right });
    }

    render() {

        const { left, right, onLeftPress, onRightPress } = this.props;

        let leftPill;
        let rightPill;
        if (this.state.active === left) {
            leftPill = (
                <View style={[styles.partial, styles.left, styles.activeBackground]}>
                    <Text style={[styles.text, styles.activeText]}>{left}</Text>
                </View>
            );
            rightPill = (
                <View style={[styles.partial, styles.right]}>
                    <Text style={styles.text}>{right}</Text>
                </View>
            );
        } else {
            leftPill = (
                <View style={[styles.partial, styles.left]}>
                    <Text style={styles.text}>{left}</Text>
                </View>
            );
            rightPill = (
                <View style={[styles.partial, styles.right, styles.activeBackground]}>
                    <Text style={[styles.text, styles.activeText]}>{right}</Text>
                </View>
            );
        }

        return (
            <View style={styles.pill}>
                <TouchableOpacity onPress={() => this._didTapLeft(onLeftPress)}>
                    {leftPill}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._didTapRight(onRightPress)}>
                    {rightPill}
                </TouchableOpacity>
            </View>
        );
    }
}

Pill.propTypes = {
    left: PropTypes.string.isRequired, 
    right: PropTypes.string.isRequired, 
    onLeftPress: PropTypes.func.isRequired, 
    onRightPress: PropTypes.func.isRequired,
}

export default Pill;