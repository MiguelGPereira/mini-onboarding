import { compose } from 'redux';

import * as measureSys from './../constants/measurementSystems';
import { toImperial } from './converters';

export function toTitleFormat(str) {
    const composeTitle = compose(
        _capitalize,
        _removeUnderscore
    );

    return composeTitle(str);
}

export function toTitleAllCapitalFormat(str) {
    const composeTitle = compose(
        _capitalizeAll,
        _removeUnderscore
    );

    return composeTitle(str);
}

export function toMeasureDisplayFormat({value, system}) {
    if(system === measureSys.METRIC) {
        return `${value}cm`;
    } else {
        const imperial = toImperial(value);
        return `${imperial.feet}ft ${imperial.inches}in`; 
    }
}

_removeUnderscore = str => str.replace("_", " ");

_capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

_capitalizeAll = str => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase());