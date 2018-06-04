// MEASUREMENT_CONSTANTS
const M_C = {
    a: 0.3937008,
    b: 12,
    c: 2.54
};

export const toMetric = (feet, inches) => {
    const totalInches = (feet * M_C.b) + inches;
    const centimeters = totalInches * M_C.c;
    return Math.round(centimeters * 100) / 100;
}

export const toImperial = (centimeters) => {
    const totalInches = centimeters * M_C.a;
    const totalFeet = totalInches / M_C.b;
    const feet = Math.floor(totalFeet);
    const inches = totalInches % M_C.b;
    return {
        feet,
        inches: Math.round(inches * 100) / 100
    }
}