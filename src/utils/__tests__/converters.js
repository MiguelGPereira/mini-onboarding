import * as converters from './../converters';

describe('converters', () => {
    describe('toMetric', () => {
        it('should convert 5ft 3in to 160.02', () => {
            const result = converters.toMetric(5, 3);
            expect(result).toBe(160.02)
        });
    });
    describe('toImperial', () => {
        it('should convert 152cm to 4ft 11.84in', () => {
            const result = converters.toImperial(152);
            expect(result.feet).toBe(4);
            expect(result.inches).toBe(11.84);
        });
    });
});