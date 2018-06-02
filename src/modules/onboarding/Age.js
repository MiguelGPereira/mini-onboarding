import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';

import { isValidAge } from './../../utils/validators';
import withOnboarding from './hocs/withOnboarding';

class Age extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ageInput: undefined,
            isValid: false
        }
    }

    _didTapNext() {
        this.props.actions.setAge(this.state.ageInput);
        this.props.navigator.push({
            screen: 'onboarding.Height',
        });
    }

    _validateInput(ageInput) {
        if (isValidAge(ageInput)) {
            this.setState({
                ageInput: ageInput,
                isValid: true
            })
        } else {
            this.setState({ isValid: false })
        }
    }

    render() {

        let nextButton = (
            <TouchableOpacity onPress={() => this._didTapNext()}>
                <Text>next</Text>
            </TouchableOpacity>
        );
        if (!this.state.isValid) {
            nextButton = (
                <Text>enter valid input</Text>
            );
        }

        return (
            <View>
                <Text>Select age</Text>
                <TextInput
                    style={{ height: 20 }}
                    placeholder="Enter age"
                    keyboardType="numeric"
                    maxLength = {3}
                    onChangeText={(ageInput) => this._validateInput(ageInput)}
                    value={this.state.ageInput}
                />
                {nextButton}
            </View>
        );
    }
}

export default withOnboarding(Age);