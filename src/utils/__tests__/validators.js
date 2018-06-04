import * as validators from './../validators';

describe('validators', () => {
    describe('age', () => {
        it('should not be 0', () => {
            expect(validators.isValidAge("0")).toBe(false);
        });
        it('should not be under 13', () => {
            expect(validators.isValidAge("12")).toBe(false);
        });
        it('should not be over 120', () => {
            expect(validators.isValidAge("121")).toBe(false);
        });
        it('should not start with 0', () => {
            expect(validators.isValidAge("012")).toBe(false);
        });
        it('should validate 24', () => {
            expect(validators.isValidAge("24")).toBe(true);
        });
    });
    describe('metric height', () => {
        it('should not be 0', () => {
            expect(validators.isValidMetricHeight("0")).toBe(false);
        });
        it('should not be under 125cm', () => {
            expect(validators.isValidMetricHeight("124")).toBe(false);
        });
        it('should not be over 301cm', () => {
            expect(validators.isValidMetricHeight("302")).toBe(false);
        });
        it('should not start with 0', () => {
            expect(validators.isValidMetricHeight("012")).toBe(false);
        });
        it('should validate 160', () => {
            expect(validators.isValidMetricHeight("160")).toBe(true);
        });
    });
    describe('imperial height', () => {
        it('should not be under 125cm', () => {
            expect(validators.isValidImperialHeight("4", "1")).toBe(false);
        });
        it('should not be over 301cm', () => {
            expect(validators.isValidImperialHeight("9", "12")).toBe(false);
        });
        it('should validate 5ft 8in', () => {
            expect(validators.isValidImperialHeight("5", "8")).toBe(true);
        });
    });
});