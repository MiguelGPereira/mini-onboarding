import React, { Component } from 'react';
import {
    compose,
    bindActionCreators
} from "redux";
import { connect } from "react-redux";

import * as actions from './../onboarding.actions';

// enhance the onboarding main components with the onboarding part of the Store
export default function withOnboarding(WrappedComponent) {
    class _anonymous_ extends Component {
        render() {
            return <WrappedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return {
            onboarding: state.onboarding
        }
    }

    function mapDispatchToProps(dispatch) {
        return {
            actions: bindActionCreators(actions, dispatch)
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(_anonymous_);
}
