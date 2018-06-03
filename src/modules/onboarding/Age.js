import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Animated,
    Keyboard,
} from 'react-native';

import styles from './styles/Age';
import _global from './../_global/styles/_global';
import { isValidAge } from './../../utils/validators';
import withOnboarding from './hocs/withOnboarding';
import Button from './../_global/Button';
import ProgressBar from './components/ProgressBar';
import Step from './components/Step';

class Age extends Component {
    constructor(props) {
        super(props);

        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

        this.props.navigator.setButtons({
            leftButtons: [{
                component: '_global.BackArrow',
                passProps: {
                    onPress: () => this.props.navigator.pop()
                }
            }]
        });

        this.state = {
            ageInput: undefined,
            isValid: false
        }
    }

    onNavigatorEvent(event) {
        event.id == 'didAppear' && this.input.focus();
    }

    _didTapNext() {
        this.props.actions.setAge(this.state.ageInput);
        this.props.navigator.push({
            screen: 'onboarding.Height',
            backButtonHidden: true,
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
        return (
            <Step
                title="How old are you?"
                progress={2/3}
                isValid={this.state.isValid}
                onContinue={this._didTapNext.bind(this)}
            >
                <TextInput
                    ref={ref => this.input = ref}
                    style={styles.input}
                    keyboardType="numeric"
                    maxLength={3}
                    contextMenuHidden={true}
                    onChangeText={(ageInput) => this._validateInput(ageInput)}
                    value={this.state.ageInput}
                />
            </Step>

        );
    }
}

export default withOnboarding(Age);