import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';

import withOnboarding from './hocs/withOnboarding';
import * as measureSys from './../../constants/measurementSystems';
import {
    isValidMetricHeight,
    isValidImperialHeight,
    isValidFeetInches
} from './../../utils/validators';
import { toMetric } from './../../utils/converters';
import Step from './components/Step';
import Pill from './components/Pill';
import styles from './styles/Height';

class Height extends Component {
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
            heightCmsInput: undefined,
            heightFtInput: undefined,
            heightInInput: undefined,
            isValid: false,
            system: measureSys.IMPERIAL,
        }
    }

    onNavigatorEvent(event) {
        if(event.id == 'didAppear'){
            if(this.state.system == measureSys.IMPERIAL) {
                this.ftInput.focus();
            } else {
                this.cmInput.focus();
            }
        }
    }

    _didTapNext() {
        const {
            heightCmsInput,
            heightFtInput,
            heightInInput,
            system
        } = this.state;

        const height = { system };

        if (system == measureSys.METRIC) {
            height.value = heightCmsInput;
        } else {
            height.value = toMetric(
                Number(heightFtInput),
                Number(heightInInput)
            );
        }

        this.props.actions.setHeight(height);

        this.props.navigator.push({
            screen: 'onboarding.Success',
        });
    }

    _validateInput(heightInput, measure) {
        let validHeight;
        switch (measure) {
            case 'cms':
                validHeight = isValidMetricHeight(heightInput);
                if (validHeight) this._updateState('heightCmsInput', heightInput);
                else this.setState({ isValid: false });
                break;

            case 'ft':
                validHeight = isValidFeetInches(heightInput);
                if (validHeight) this._updateState('heightFtInput', heightInput);
                else this.setState({ isValid: false });
                break;

            case 'in':
                validHeight = isValidFeetInches(heightInput);
                if (validHeight) this._updateState('heightInInput', heightInput);
                else this.setState({ isValid: false });
                break;
        }
    }

    _updateState(key, value) {
        this.setState(
            { [key]: value },
            () => this.setState({ isValid: this._validateState() })
        );
    }

    _validateState() {
        const { heightCmsInput, heightFtInput, heightInInput, system } = this.state;
        const validMetric =
            system == measureSys.METRIC
            && heightCmsInput != undefined;

        const validImperial =
            system == measureSys.IMPERIAL
            && heightFtInput != undefined
            && heightInInput != undefined
            && isValidImperialHeight(heightFtInput, heightInInput);

        return validMetric || validImperial;
    }

    _didTapMetric() {
        this.setState({
            heightCmsInput: undefined,
            heightFtInput: undefined,
            heightInInput: undefined,
            isValid: false,
            system: measureSys.METRIC
        }, () => this.cmInput.focus());
    }

    _didTapImperial() {
        this.setState({
            heightCmsInput: undefined,
            heightFtInput: undefined,
            heightInInput: undefined,
            isValid: false,
            system: measureSys.IMPERIAL
        }, () => this.ftInput.focus());
    }

    render() {
        let heightInput;
        if (this.state.system == measureSys.METRIC) {
            heightInput = (
                <View style={styles.inputSection}>
                    <View>
                        <TextInput
                            ref={ref => this.cmInput = ref}
                            style={styles.input}
                            maxLength={3}
                            keyboardType="numeric"
                            onChangeText={(heightInput) => this._validateInput(heightInput, 'cms')}
                            value={this.state.heightCmsInput}
                        />
                        <Text style={[
                            styles.inputPlaceholder,
                            styles.inputPlaceholderMetric
                        ]}>Cm</Text>
                    </View>
                </View>
            );
        } else {
            heightInput = (
                <View style={styles.inputSection}>
                    <View>
                        <TextInput
                            ref={ref => this.ftInput = ref}
                            style={styles.input}
                            keyboardType="numeric"
                            maxLength={2}
                            onChangeText={(heightInput) => this._validateInput(heightInput, 'ft')}
                            value={this.state.heightFtInput}
                        />
                        <Text style={styles.inputPlaceholder}>Ft</Text>
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            maxLength={2}
                            onChangeText={(heightInput) => this._validateInput(heightInput, 'in')}
                            value={this.state.heightInInput}
                        />
                        <Text style={styles.inputPlaceholder}>In</Text>
                    </View>
                </View>
            );
        }

        return (
            <Step
                title="How tall are you?"
                progress={3 / 3}
                isValid={this.state.isValid}
                onContinue={this._didTapNext.bind(this)}
            >
                <View  style={styles.container}>
                    {heightInput}
                    <Pill 
                        left='FT'
                        right='CM'
                        init='FT'
                        onLeftPress={() => this._didTapImperial()}
                        onRightPress={() => this._didTapMetric()}
                    />
                </View>
            </Step>
        );
    }
}

export default withOnboarding(Height);