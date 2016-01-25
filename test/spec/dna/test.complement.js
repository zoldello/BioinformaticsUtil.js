import { complement } from './../../../src/dna/complement';

describe('DNA string complement', () => {
    it('should return complement of a DNA string', () => {
        let dNAString = 'AAAACCCGGT',
            expected = 'TTTTGGGCCA';

        expect(complement(dNAString)).toBe(expected);
    });
});
