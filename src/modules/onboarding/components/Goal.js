import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from "react-native";
import PropTypes from "prop-types";

import styles from "./styles/Goal";

const Goal = ({ goal, title, description, _didTapGoal }) => {
    return (
        <TouchableOpacity onPress={() => _didTapGoal(goal)}>
            <View style={styles.container}>
                <View style={styles.labelsView}>
                    <Text style={styles.title}>{title}</Text>
                    <Text>{description}</Text>
                </View>
                <View style={styles.arrowView}>
                    <Image source={require("./../img/chevronRight.png")} />

                </View>
            </View>
        </TouchableOpacity>
    );
}

Goal.propTypes = {
    goal: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    _didTapGoal: PropTypes.func.isRequired,
}

export default Goal;