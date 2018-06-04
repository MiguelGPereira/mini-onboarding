import React, { Component } from "react";
import {
    View,
    Text,
    Keyboard,
    Animated,
    Dimensions,
    Platform,
} from "react-native";
import PropTypes from "prop-types";

import styles from "./styles/Step";
import Button from "./../../_global/Button";
import ProgressBar from "./ProgressBar";
import _global from "./../../_global/styles/_global";

class Step extends Component {
    constructor(props) {
        super(props);

        this.buttonViewTranslateY = new Animated.Value(0);
    }

    componentWillMount() {
        this.keyboardWillShowSub = Keyboard.addListener("keyboardWillShow", this.keyboardWillShow);
        this.keyboardDidShowSub = Keyboard.addListener("keyboardDidShow", this.keyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener("keyboardDidHide", this.keyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardWillShowSub.remove();
        this.keyboardDidShowSub.remove();
        this.keyboardDidHideSub.remove();
    }

    keyboardWillShow = (event) => {
        Animated.timing(this.buttonViewTranslateY, {
            duration: event.duration,
            toValue: -event.endCoordinates.height,
            useNativeDriver: true
        }).start();
    }

    keyboardDidShow = (event) => {
        if (this.buttonViewTranslateY._value != 0) return;
        this.submitView._component.measure((fx, fy, width, height, px, py) => {
            const offsetY = py;
            const keyboardH = event.endCoordinates.height;

            if (offsetY > keyboardH) return;

            Animated.timing(this.buttonViewTranslateY, {
                duration: 300,
                toValue: -event.endCoordinates.height,
                useNativeDriver: true
            }).start();
        })
    }

    keyboardDidHide = (event) => {
        Platform.OS === "android" && this.buttonViewTranslateY.setValue(0);
    }

    render() {
        const { title, progress, isValid, onContinue } = this.props;

        let nextButton;
        if (isValid) {
            nextButton = (
                <Button
                    text="Continue"
                    onPress={onContinue}
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
                    <ProgressBar progress={progress} />
                    <Text style={_global.title}>
                        {title}
                    </Text>
                    {this.props.children}
                </View>
                <Animated.View ref={ref => this.submitView = ref} style={[styles.buttonView, {
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

Step.propTypes = {
    title: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    isValid: PropTypes.bool.isRequired,
    onContinue: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
}

export default Step;