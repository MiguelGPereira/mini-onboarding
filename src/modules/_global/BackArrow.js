import React, { Component } from "react";
import {
    Image,
    TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";

class BackArrow extends Component {
    render() {
        const { onPress } = this.props;
        return (
            <TouchableOpacity onPress={() => onPress()}>
                <Image source={require("./img/icArrowLeft.png")} />
            </TouchableOpacity>

        );
    }
}

BackArrow.propTypes = {
    onPress: PropTypes.func
}

export default BackArrow;