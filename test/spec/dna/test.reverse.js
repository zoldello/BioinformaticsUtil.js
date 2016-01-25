import { reverse } from '../../../src/dna/reverse';

describe('Reverse DNA string', () => {
    it('should return reversed string', () => {
        let dNAString = 'AGCTTCATTCTGA',
			expected = 'AGTCTTACTTCGA';

        expect(reverse(dNAString)).toBe(expected);
    });
});
