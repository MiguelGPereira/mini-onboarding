import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';

import styles from './styles/Landing';
import _global from './../_global/styles/_global';
import withOnboarding from './hocs/withOnboarding';
import * as fitnessGoals from './../../constants/fitnessGoals';
import { toTitleFormat } from './../../utils/formatters';
import Goal from './components/Goal';

class Landing extends Component {
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
                <Image style={styles.background} source={require('./../../../assets/backgroundGrain.png')} />
                <View style={styles.leftBg}>
                    <Image source={require('./../../../assets/imgBeans.png')} />
                </View>
                <View style={styles.rightBg}>
                    <Image style={styles.dumbbell} source={require('./../../../assets/imgDumbbell.png')} />
                    <Image source={require('./../../../assets/imgMat.png')} />
                </View>
                
                
                <Image style={styles.logo} source={require('./../../../assets/icon8Logo.png')} />
                <Text style={styles.logoLabel}>WELCOME TO 8FIT</Text>
                <Text style={_global.title}>What's your goal?</Text>
                <ScrollView style={styles.scrollView}>
                    {renderedItems}
                </ScrollView>
            </View>
        );
    }
}

export default withOnboarding(Landing);