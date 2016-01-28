import { findMotif } from '../../../src/dna/findMotif';

describe('find a motif', () => {
    it('identify all instances of substring t in string s', () => {
        let DNAString1 = 'GATATATGCATATACTT',
            DNAString2 = 'ATAT',
			expected = '2 4 10';

        expect(findMotif(DNAString1, DNAString2)).toBe(expected);
    });
});

describe('find a motif', () => {
    it('results in nothing if there the substring is less than the string', () => {
        let DNAString1 = 'GA',
            DNAString2 = 'ATAT',
			expected = '';

        expect(findMotif(DNAString1, DNAString2)).toBe(expected);
    });
});
