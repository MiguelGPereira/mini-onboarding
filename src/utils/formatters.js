import { compose } from 'redux';

export function toTitleFormat(str) {
    const composeTitle = compose(
        _removeUnderscore,
        _capitalize
    );

    return composeTitle(str);
}

_removeUnderscore = str => str.replace("_", " ");

_capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();