import React, { Component } from 'react';
import {
    View,
    Text,
    Keyboard,
    Animated
} from 'react-native';

import styles from './styles/Step';
import Button from './../../_global/Button';
import ProgressBar from './ProgressBar';
import _global from './../../_global/styles/_global';

class Step extends Component {
    constructor(props) {
        super(props);
        this.buttonViewTranslateY = new Animated.Value(0);
    }

    componentWillMount() {
        this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow.bind(this));
    }

    componentWillUnmount() {
        this.keyboardWillShowSub.remove();
    }

    keyboardWillShow(event) {
        Animated.timing(this.buttonViewTranslateY, {
            duration: event.duration * (2 / 3),
            toValue: -event.endCoordinates.height,
            useNativeDriver: true
        }).start();
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
                    { this.props.children }
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

export default Step;