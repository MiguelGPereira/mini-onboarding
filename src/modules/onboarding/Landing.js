import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Animated,
    Dimensions
} from 'react-native';

import styles from './styles/Landing';
import _global from './../_global/styles/_global';
import withOnboarding from './hocs/withOnboarding';
import * as fitnessGoals from './../../constants/fitnessGoals';
import { toTitleFormat } from './../../utils/formatters';
import Goal from './components/Goal';

class Landing extends Component {
    constructor(props) {
        super(props);

        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

        this.delta = 1000;
        this.logoFinalPosition = Dimensions.get('window').height / 2 - 60;
        this.contentTranslate = new Animated.Value(40);
        this.contentOpacity = new Animated.Value(0);
        this.leftBgTranslate = new Animated.Value(-180);
        this.rightBgTranslate = new Animated.Value(180);
        this.logoTranslate = new Animated.Value(0);
        this.logoScale = new Animated.Value(2);
    }

    onNavigatorEvent(event) {
        if(event.id == 'didAppear') {
            Animated.parallel([
                Animated.timing(this.logoScale, {
                    duration: this.delta * (2/3),
                    toValue: 1,
                    useNativeDriver: true
                }),
                Animated.timing(this.logoTranslate, {
                    duration: this.delta * (2/3),
                    toValue: -this.logoFinalPosition,
                    useNativeDriver: true
                }),
                Animated.timing(this.leftBgTranslate, {
                    delay: this.delta * (1/3),
                    duration: this.delta * (1/3),
                    toValue: 0,
                    useNativeDriver: true
                }),
                Animated.timing(this.rightBgTranslate, {
                    delay: this.delta * (1/3),
                    duration: this.delta * (1/3),
                    toValue: 0,
                    useNativeDriver: true
                }),
                Animated.timing(this.contentOpacity, {
                    delay: this.delta * (1/2),
                    duration: this.delta * (1/2),
                    toValue: 1,
                    useNativeDriver: true
                }),
                Animated.timing(this.contentTranslate, {
                    delay: this.delta * (1/2),
                    duration: this.delta * (1/2),
                    toValue: 0,
                    useNativeDriver: true
                })
            ]).start();
        }
    }

    _didTapGoal(goal) {
        this.props.actions.setGoal(goal);
        this.props.navigator.push({
            screen: 'onboarding.Age',
        });
    }

    render() {
        const renderedItems = Object.keys(fitnessGoals).map(goal =>
            <Goal
                key={goal}
                goal={goal}
                title={toTitleFormat(goal)}
                description={fitnessGoals[goal].description}
                _didTapGoal={this._didTapGoal.bind(this)}
            />
        );

        return (
            <View style={styles.container}>
                <Image style={styles.background} source={require('./img/backgroundGrain.png')} />
                <Animated.View style={[styles.leftBg, {
                    transform: [{
                        translateX: this.leftBgTranslate
                    }]
                }]}>
                    <Image source={require('./img/imgBeans.png')} />
                </Animated.View>
                <Animated.View style={[styles.rightBg, {
                    transform: [{
                        translateX: this.rightBgTranslate
                    }]
                }]}>
                    <Image style={styles.dumbbell} source={require('./img/imgDumbbell.png')} />
                    <Image source={require('./img/imgMat.png')} />
                </Animated.View>

                <Animated.Image style={[styles.logo, {
                    transform: [{
                        translateY: this.logoTranslate
                    }, {
                        scaleX: this.logoScale
                    }, {
                        scaleY: this.logoScale
                    }]
                }]} source={require('./img/icon8Logo.png')} />

                <Animated.View style={[styles.content, {
                    opacity: this.contentOpacity,
                    transform: [{
                        translateY: this.contentTranslate
                    }]
                }]}>
                    <Text style={styles.logoLabel}>WELCOME TO 8FIT</Text>
                    <Text style={_global.title}>What's your goal?</Text>
                    <ScrollView style={styles.scrollView}>
                        {renderedItems}
                    </ScrollView>
                </Animated.View>
            </View>
        );
    }
}

export default withOnboarding(Landing);