import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import withOnboarding from './hocs/withOnboarding';
import { toMeasureDisplayFormat, toTitleAllCapitalFormat } from './../../utils/formatters';

class Success extends Component {
    render() {
        
        const { goal, age, height } = this.props.onboarding;

        const goalRender = toTitleAllCapitalFormat(goal);
        const heightRender = toMeasureDisplayFormat(height)

        return (
            <View>
                <Text>goal: {goalRender}</Text>
                <Text>age: {age}</Text>
                <Text>height: {heightRender}</Text>
            </View>
        );
    }
}

export default withOnboarding(Success);