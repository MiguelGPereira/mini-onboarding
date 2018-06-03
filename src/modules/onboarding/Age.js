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

        this.buttonViewTranslateY = new Animated.Value(0);
    }

    onNavigatorEvent(event) {
        event.id == 'didAppear' && this.input.focus();
    }

    componentWillMount() {
        this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow.bind(this));
    }

    componentWillUnmount() {
        this.keyboardWillShowSub.remove();
    }

    keyboardWillShow(event) {
        Animated.timing(this.buttonViewTranslateY, {
            duration: event.duration * (2/3),
            toValue: -event.endCoordinates.height,
            useNativeDriver: true
        }).start();
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
        let nextButton;
        if (this.state.isValid) {
            nextButton = (
                <Button
                    text="Continue"
                    onPress={this._didTapNext.bind(this)}
                />
            );
        } else {
            nextButton = (
                <Button
                    text="Continue"
                    onPress={null}
                    disabled={true}
                />
            );
        }

        return (
            <View style={styles.container}>
                <View style={styles.formView}>
                    <ProgressBar percentage={2/3} />
                    <Text style={_global.title}>
                        How old are you?
                    </Text>
                    <TextInput
                        ref={ref => this.input = ref}
                        style={styles.input}
                        keyboardType="numeric"
                        maxLength={3}
                        contextMenuHidden={true}
                        onChangeText={(ageInput) => this._validateInput(ageInput)}
                        value={this.state.ageInput}
                    />
                </View>
                <Animated.View style={[styles.buttonView, {
                    transform: [
                        { translateY: this.buttonViewTranslateY }
                    ]
                }]}>
                    {nextButton}
                </Animated.View>
            </View>
        );
    }
}

export default withOnboarding(Age);