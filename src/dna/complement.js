import { sanitizeDNAString } from './sanitizeDNAString'


/**
* Complements a DNA string
* @param {string} dNAString - DNA String
* @returns {string} complement of DNA
*/
export function complement(dNAString) {
    let complementDNA = [],
        dNAStringToUse = sanitizeDNAString(dNAString);

    for(let d of dNAStringToUse ) {
        switch(d) {
            case 'A':
                complementDNA.push('T');
                break;
            case 'T':
                complementDNA.push('A');
                break;
            case 'G':
                complementDNA.push('C');
                break;
            case 'C':
                complementDNA.push('G');
                break;
            default:
                if (!!console && !!console.log) {
                    console.log(`Invalid nucleotide ${d} in string: ${dNAString}, managed to get past: isValid. Check for errors in unit test`);
                }
                throw `Invalid nucleotides: ${d} in string: ${dNAString}`;
                break;
        }
    }

    return complementDNA.join('');
};
