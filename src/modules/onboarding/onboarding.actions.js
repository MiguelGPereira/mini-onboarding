import * as actionTypes from './../../constants/actionTypes';

export function setGoal(fitnessGoal) {
    return {
        type: actionTypes.SET_GOAL,
        payload: fitnessGoal
    }
}

export function setAge(age) {
    return {
        type: actionTypes.SET_AGE,
        payload: age
    }
}

export function setHeight(height) {
    return {
        type: actionTypes.SET_HEIGHT,
        payload: height
    }
}