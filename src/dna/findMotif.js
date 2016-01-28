import { sanitizeDNAString } from './sanitizeDNAString'


/**
* Find a motif
* @param {string} DNAString - DNA String
* @param {string} DNASubString - DNA Substring
* @returns {string} Locations of DNASubString in DNAString, using 1-based numbering system
*/
export function findMotif(DNAString, DNASubString) {
    let DNAToUse = sanitizeDNAString(DNAString),
        DNASubStringToUse = sanitizeDNAString(DNASubString),
        stringLength = DNAToUse.length,
        subStringLength = DNASubStringToUse.length,
        stringSlice,
        positions = [];

        if (stringLength < subStringLength) {
            return '';
        }

        for(let i = 0; i <(stringLength - subStringLength); i++) {
            stringSlice = DNAToUse.slice(i, i + subStringLength);

            if (stringSlice === DNASubString) {
                positions.push(i + 1);
            }
        }
        return positions.join(' ');
};
