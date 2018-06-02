import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import * as fitnessGoals from './../../constants/fitnessGoals';

class Landing extends Component {
    _didTapGoal(goal) {
        this.props.navigator.push({
            screen: 'onboarding.Age',
        });
    }

    render() {
        const renderedItems = Object.keys(fitnessGoals).map(goal => 
            <TouchableOpacity key={goal} onPress={() => this._didTapGoal(goal)}>
                <Text>{fitnessGoals[goal].description}</Text>
            </TouchableOpacity>
        );

        return (
            <View>
                <Text>Select goal</Text>
                { renderedItems }
            </View>
        );
    }
}

export default Landing;