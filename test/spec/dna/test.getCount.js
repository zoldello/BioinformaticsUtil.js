import { getCount } from '../../../src/dna/getCount';
import {invalidDNAMessage } from '../../../src/dna/standardMessage';

describe('Nucleotide Count', () => {
    it('get the count of nucleotides order by A T G C', () => {
        let dNAString = 'AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC',
            expected = '20 12 17 21';

        expect(getCount(dNAString)).toEqual(expected);
    });

/*
    it('should throw an appropiate exception for an invalid DNA String', () => {
        let dNAString = 'xACTG',
            expected = invalidDNAMessage(dNAString);

        expect(getCount(dNAString)).toThrowError(expected);
    });
    */
});
