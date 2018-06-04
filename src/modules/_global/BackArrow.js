import React from "react";
import {
    Image,
    TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";

const BackArrow = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress()}>
            <Image source={require("./img/icArrowLeft.png")} />
        </TouchableOpacity>
    );
}



BackArrow.propTypes = {
    onPress: PropTypes.func
}

export default BackArrow;