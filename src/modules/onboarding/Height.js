import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';

class Height extends Component {
    constructor(props) {
        super(props);

        this.state = {
            heightInput: undefined
        }
    }

    _didTapNext(height) {
        this.props.navigator.push({
            screen: 'onboarding.Success',
        });
    }

    render() {
        return (
            <View>
                <Text>Select height</Text>
                <TextInput
                    style={{ height: 20 }}
                    placeholder="Enter height"
                    keyboardType="numeric"
                    onChangeText={(heightInput) => this.setState({ageInput: heightInput})}
                    value = {this.state.heightInput}
                />
                <TouchableOpacity onPress={() => this._didTapNext()}>
                    <Text>next</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Height;