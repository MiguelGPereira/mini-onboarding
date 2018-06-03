import { toMetric } from './converters';

export function isValidAge(ageStr) {
    if (_isOnlyNumbers(ageStr)) {
        const age = parseInt(ageStr);
        return _isInAgeInterval(age);
    }
    return false;
}

export function isValidMetricHeight(centimetersStr) {
    if (_isOnlyNumbers(centimetersStr)) {
        const centimeters = Number(centimetersStr);
        return _isInHeightInterval(centimeters);
    }
    return false;
}

export function isValidFeetInches(value) {
    return _isOnlyNumbers(value);
}

export function isValidImperialHeight(feetStr, inchesStr) {
    const feet = Number(feetStr);
    const inches = Number(inchesStr);
    const centimeters = toMetric(feet, inches);
    return _isInHeightInterval(centimeters);
}

_isOnlyNumbers = str => /^\d+$/.test(str);

_isInAgeInterval = age => age >= 13 && age <= 120;

_isInHeightInterval = height => height >= 125 && height <= 301;

