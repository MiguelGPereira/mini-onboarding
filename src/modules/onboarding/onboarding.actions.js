export function setGoal(fitnessGoal) {
    return {
        type: "SET_GOAL",
        payload: fitnessGoal
    }
}

export function setAge(age) {
    return {
        type: "SET_AGE",
        payload: age
    }
}

export function setHeight(height, measurementSystem) {
    return {
        type: "SET_HEIGHT",
        payload: {
            value: height,
            system: measurementSystem
        }
    }
}