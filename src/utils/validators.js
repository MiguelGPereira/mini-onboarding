import { toMetric } from './converters';

export function isValidAge(ageStr) {
    if (_isNumbers(ageStr)) {
        const age = parseInt(ageStr);
        return _isInAgeInterval(age);
    }
    return false;
}

export function isValidMetricHeight(centimetersStr) {
    if (_isNumbers(centimetersStr)) {
        const centimeters = Number(centimetersStr);
        return _isInHeightInterval(centimeters);
    }
    return false;
}

export function isValidFeetInches(value) {
    return _isNumbers(value);
}

export function isValidImperialHeight(feetStr, inchesStr) {
    const feet = Number(feetStr);
    const inches = Number(inchesStr);
    const centimeters = toMetric(feet, inches);
    return _isInHeightInterval(centimeters);
}

_isNumbers = str => /^\d+$/.test(str) && str.charAt(0) != '0';

_isInAgeInterval = age => age >= 13 && age <= 120;

_isInHeightInterval = height => height >= 125 && height <= 301;

