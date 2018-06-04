import { compose } from "redux";

import * as measureSys from "./../constants/measurementSystems";
import { toImperial } from "./converters";

export const toTitleFormat = (str) => {
    const composeTitle = compose(
        _capitalize,
        _removeUnderscore
    );

    return composeTitle(str);
}

export const toTitleAllCapitalFormat = (str) => {
    const composeTitle = compose(
        _capitalizeAll,
        _removeUnderscore
    );

    return composeTitle(str);
}

export const toMeasureDisplayFormat = ({ value, system }) => {
    if (system === measureSys.METRIC) {
        return `${value}cm`;
    } else {
        const imperial = toImperial(value);
        return `${imperial.feet}ft ${imperial.inches}in`;
    }
}

const _removeUnderscore = str => str.replace("_", " ");

const _capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const _capitalizeAll = str => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase());