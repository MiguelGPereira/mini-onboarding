import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import styles from './styles/Success';
import _global from './../_global/styles/_global';
import withOnboarding from './hocs/withOnboarding';
import { toMeasureDisplayFormat, toTitleAllCapitalFormat } from './../../utils/formatters';
import Button from './../_global/Button';

class Success extends Component {
    constructor(props) {
        super(props);

        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
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
        }
    }

    render() {
        const { goal, age, height } = this.props.onboarding;

        const goalRender = goal != undefined && toTitleAllCapitalFormat(goal);
        const heightRender = toMeasureDisplayFormat(height)

        return (
            <View style={styles.container}>
                <Image style={styles.background} source={require('./img/backgroundGrain.png')} />
                <View style={styles.leftBg}>
                    <Image source={require('./img/imgBeans.png')} />
                </View>
                <View style={styles.rightBg}>
                    <Image source={require('./img/imgParsley.png')} />
                </View>

                <View style={styles.top}>
                    <Text style={_global.title}>Confirm your details:</Text>
                    <View style={styles.details}>
                        <View style={styles.detailRow}>
                            <Text style={styles.title}>Goal</Text>
                            <Text style={styles.value}>{goalRender}</Text>
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.detailRow}>
                            <Text style={styles.title}>Age</Text>
                            <Text style={styles.value}>{age}</Text>
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.detailRow}>
                            <Text style={styles.title}>Height</Text>
                            <Text style={styles.value}>{heightRender}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <Button
                        text="Save"
                        onPress={() => this.props.navigator.popToRoot()}
                    />
                </View>
            </View>
        );
    }
}

export default withOnboarding(Success);