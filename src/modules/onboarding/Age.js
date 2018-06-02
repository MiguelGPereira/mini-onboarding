import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';

class Age extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ageInput: undefined
        }
    }

    _didTapNext() {
        this.props.navigator.push({
            screen: 'onboarding.Height',
        });
    }

    render() {
        return (
            <View>
                <Text>Select age</Text>
                <TextInput
                    style={{ height: 20 }}
                    placeholder="Enter age"
                    keyboardType="numeric"
                    onChangeText={(ageInput) => this.setState({ageInput: ageInput})}
                    value = {this.state.ageInput}
                />
                <TouchableOpacity onPress={() => this._didTapNext()}>
                    <Text>next</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Age;