import { toMetric } from "./converters";

export const isValidAge = (ageStr) => {
    if (_isNumbers(ageStr)) {
        const age = parseInt(ageStr);
        return _isInAgeInterval(age);
    }
    return false;
}

export const isValidMetricHeight = (centimetersStr) => {
    if (_isNumbers(centimetersStr)) {
        const centimeters = Number(centimetersStr);
        return _isInHeightInterval(centimeters);
    }
    return false;
}

export const isValidFeetInches = (value) => {
    return _isNumbers(value);
}

export const isValidImperialHeight = (feetStr, inchesStr) => {
    const feet = Number(feetStr);
    const inches = Number(inchesStr);
    const centimeters = toMetric(feet, inches);
    return _isInHeightInterval(centimeters);
}

const _isNumbers = str => /^\d+$/.test(str) && str.charAt(0) != "0";

const _isInAgeInterval = age => age >= 13 && age <= 120;

const _isInHeightInterval = height => height >= 125 && height <= 301;

