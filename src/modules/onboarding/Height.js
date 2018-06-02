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

class Height extends Component {
    constructor(props) {
        super(props);

        this.state = {
            heightCmsInput: undefined,
            heightFtInput: undefined,
            heightInInput: undefined,
            isValid: false,
            system: measureSys.METRIC,
        }
    }

    _didTapNext() {
        const { heightCmsInput, heightFtInput, heightInInput, system } = this.state;
        const height = {
            system
        }

        if (system == measureSys.METRIC) {
            height.value = heightCmsInput;
        } else {
            height.value = toMetric(Number(heightFtInput), Number(heightInInput));
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
                if (validHeight) {
                    this.setState(
                        { heightCmsInput: heightInput },
                        () => this.setState({ isValid: this._validateState() })
                    );
                } else {
                    this.setState({ isValid: false })
                }
                break;
            case 'ft':
                validHeight = isValidFeetInches(heightInput);
                if (validHeight) {
                    this.setState(
                        { heightFtInput: heightInput },
                        () => this.setState({ isValid: this._validateState() })
                    );
                } else {
                    this.setState({ isValid: false })
                }
                break;
            case 'in':
                validHeight = isValidFeetInches(heightInput);
                if (validHeight) {
                    this.setState(
                        { heightInInput: heightInput },
                        () => this.setState({ isValid: this._validateState() })
                    );
                } else {
                    this.setState({ isValid: false })
                }
                break;
        }
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
         });
    }

    _didTapImperial() {
        this.setState({
            heightCmsInput: undefined,
            heightFtInput: undefined,
            heightInInput: undefined,
            isValid: false,
            system: measureSys.IMPERIAL
         });
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

        let metricInput;
        if (this.state.system == measureSys.METRIC) {
            metricInput = (
                <TextInput
                    style={{ height: 20 }}
                    placeholder="CM"
                    keyboardType="numeric"
                    onChangeText={(heightInput) => this._validateInput(heightInput, 'cms')}
                    value={this.state.heightCmsInput}
                />
            );
        } else {
            metricInput = (
                <View>
                    <TextInput
                        style={{ height: 20 }}
                        placeholder="FT"
                        keyboardType="numeric"
                        onChangeText={(heightInput) => this._validateInput(heightInput, 'ft')}
                        value={this.state.heightFtInput}
                    />
                    <TextInput
                        style={{ height: 20 }}
                        placeholder="In"
                        keyboardType="numeric"
                        onChangeText={(heightInput) => this._validateInput(heightInput, 'in')}
                        value={this.state.heightInInput}
                    />
                </View>
            );
        }

        return (
            <View>
                <Text>Select height</Text>
                {metricInput}
                <TouchableOpacity onPress={() => this._didTapMetric()}>
                    <Text>metric</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._didTapImperial()}>
                    <Text>imperial</Text>
                </TouchableOpacity>
                {nextButton}
            </View>
        );
    }
}

export default withOnboarding(Height);