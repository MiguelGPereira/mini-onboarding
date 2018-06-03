import React, { Component } from 'react';
import {
    Image,
    TouchableOpacity
} from 'react-native';

class BackArrow extends Component {
    render() {
        const { onPress } = this.props;
        return (
            <TouchableOpacity onPress={() => onPress()}>
                <Image source={require('./../../../assets/icArrowLeft.png')} />
            </TouchableOpacity>

        );
    }
}

export default BackArrow;