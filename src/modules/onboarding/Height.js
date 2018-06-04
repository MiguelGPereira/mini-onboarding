import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform
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

        this.state = {
            heightCmsInput: undefined,
            heightFtInput: undefined,
            heightInInput: undefined,
            isValid: false,
            system: measureSys.IMPERIAL,
        }
    }

    onNavigatorEvent(event) {
        if (event.id === 'didAppear') {
            this.props.navigator.setButtons({
                leftButtons: [{
                    id: 'back',
                    component: '_global.BackArrow',
                    passProps: {
                        onPress: () => this.props.navigator.pop()
                    }
                }],
                animated: false
            });

            if (this.state.system === measureSys.IMPERIAL) {
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

        if (system === measureSys.METRIC) {
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
            backButtonHidden: true,
            navigatorStyle: {
                navBarTranslucent: Platform.OS === 'ios',
                navBarTransparent: true,
                drawUnderNavBar: true,
                topBarElevationShadowEnabled: false,
                navBarNoBorder: true,
            }
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
            system === measureSys.METRIC
            && heightCmsInput != undefined;

        const validImperial =
            system === measureSys.IMPERIAL
            && heightFtInput != undefined
            && heightInInput != undefined
            && isValidImperialHeight(heightFtInput, heightInInput);

        return validMetric || validImperial;
    }

    _didTapMetric() {
        this.setState({
            heightCmsInput: null,
            heightFtInput: null,
            heightInInput: null,
            isValid: false,
            system: measureSys.METRIC
        }, () => this.cmInput.focus());
    }

    _didTapImperial() {
        this.setState({
            heightCmsInput: null,
            heightFtInput: null,
            heightInInput: null,
            isValid: false,
            system: measureSys.IMPERIAL
        }, () => this.ftInput.focus());
    }

    render() {
        let heightInput;
        if (this.state.system === measureSys.METRIC) {
            heightInput = (
                <View style={styles.inputSection}>
                    <View>
                        <TextInput
                            key={1}
                            ref={ref => this.cmInput = ref}
                            style={styles.input}
                            maxLength={3}
                            underlineColorAndroid="transparent"
                            keyboardType="numeric"
                            onChangeText={(heightInput) => this._validateInput(heightInput, 'cms')}
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
                            key={2}
                            ref={ref => this.ftInput = ref}
                            style={styles.input}
                            keyboardType="numeric"
                            maxLength={2}
                            underlineColorAndroid="transparent"
                            onChangeText={(heightInput) => this._validateInput(heightInput, 'ft')}
                        />
                        <Text style={styles.inputPlaceholder}>Ft</Text>
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            maxLength={2}
                            underlineColorAndroid="transparent"
                            onChangeText={(heightInput) => this._validateInput(heightInput, 'in')}
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
                <View style={styles.container}>
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