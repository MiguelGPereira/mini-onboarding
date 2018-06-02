import initialState from './../../store/initialState';
import * as actionTypes from './../../constants/actionTypes';

export default function (state = initialState.onboarding, action) {
    switch (actionTypes) {
        case actionTypes.SET_GOAL:
            return {
                ...state,
                goal: action.payload
            }

        case actionTypes.SET_AGE:
            return {
                ...state,
                age: action.payload
            }

        case actionTypes.SET_HEIGHT:
            return {
                ...state,
                height: action.payload,
            }
    }

    return state;
}