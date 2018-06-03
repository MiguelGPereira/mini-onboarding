import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import styles from './styles/Pill';

class Pill extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: 'FT'
        }
    }

    render() {

        let ftPill;
        let cmSPill;
        if (this.state.active == 'FT') {
            ftPill = (
                <View style={[styles.partial, styles.left, styles.activeBackground]}>
                    <Text style={[styles.text, styles.activeText]}>FT</Text>
                </View>
            );
            cmSPill = (
                <View style={[styles.partial, styles.right]}>
                    <Text style={styles.text}>CM</Text>
                </View>
            );
        } else {
            ftPill = (
                <View style={[styles.partial, styles.left]}>
                    <Text style={styles.text}>FT</Text>
                </View>
            );
            cmSPill = (
                <View style={[styles.partial, styles.right, styles.activeBackground]}>
                    <Text style={[styles.text, styles.activeText]}>CM</Text>
                </View>
            );
        }



        return (
            <View style={styles.pill}>
                <TouchableOpacity onPress={() => this.setState({ active: 'FT' })}>
                    {ftPill}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ active: 'CM' })}>
                    {cmSPill}
                </TouchableOpacity>
            </View>
        );
    }
}

export default Pill;