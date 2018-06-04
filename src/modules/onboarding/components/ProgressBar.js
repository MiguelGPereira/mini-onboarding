import React from "react";
import {
    View,
    Dimensions
} from "react-native";
import PropTypes from "prop-types";

import styles from "./styles/ProgressBar";

const ProgressBar = ({ progress }) => {
    const barWidth = Dimensions.get("window").width * progress;
    return (
        <View style={[styles.bar, {
            width: barWidth
        }]} />
    );
}

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired
}

export default ProgressBar;