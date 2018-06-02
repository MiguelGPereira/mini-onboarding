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

export function ___isValidImperialHeight(feetStr, inchesStr, measureToEval) {
    switch (measureToEval) {
        case 'ft':
            if (inchesStr == undefined) return false;
            if (_isOnlyNumbersDecimal(feetStr)) {
                const feet = Number(feetStr);
                const inches = Number(inchesStr);
                const centimeters = toMetric(feet, inches);
                return _isInHeightInterval(centimeters);
            }
            break;
        case 'in':
            if (feetStr == undefined) return false;
            break;
    }
}

export function isValidFeetInches(value) {
    return _isOnlyNumbersDecimal(value);
}

export function isValidImperialHeight(feetStr, inchesStr) {
    const feet = Number(feetStr);
    const inches = Number(inchesStr);
    const centimeters = toMetric(feet, inches);
    return _isInHeightInterval(centimeters);
}

_isOnlyNumbers = str => /^\d+$/.test(str);

_isOnlyNumbersDecimal = str => /^\d+(\.?\d+)?$/.test(str);

_isInAgeInterval = age => age >= 13 && age <= 120;

_isInHeightInterval = height => height >= 125 && height <= 301;

