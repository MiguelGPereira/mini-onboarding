export function isValidAge(ageStr) {
    if (_isOnlyNumbers(ageStr)) {
        const age = parseInt(ageStr);
        return _isInAgeInterval(age);
    }
    return false;
}

_isOnlyNumbers = str => /^\d+$/.test(str);

_isInAgeInterval = age => age >= 13 && age <= 120

