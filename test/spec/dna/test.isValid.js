import { isValid } from './../../../src/dna/isValid';

describe('DNA string validity test', () => {
    it('should return true for valid DNA string', () => {
        let dNAString = 'ACTG',
            expected = true;

        expect(isValid(dNAString)).toBe(expected);
    });

    it('should return false for invalid DNA string', () => {
        let dNAString = 'xACTG',
            expected = false;

        expect(isValid(dNAString)).toBe(expected);
    });
});
