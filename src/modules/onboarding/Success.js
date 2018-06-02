import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import withOnboarding from './hocs/withOnboarding';

class Success extends Component {
    render() {
        window.props = this.props;
        return (
            <View>
                <Text>goal: {this.props.onboarding.goal}</Text>
                <Text>age: {this.props.onboarding.age}</Text>
                <Text>height: {this.props.onboarding.height.value}</Text>
            </View>
        );
    }
}

export default withOnboarding(Success);