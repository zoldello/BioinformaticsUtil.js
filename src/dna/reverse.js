import { sanitizeDNAString } from './sanitizeDNAString'

/**
* Reverses a DNA string
* @param {string} dnaString - DNA String
* @param {boolean} ignoreCase [input=true] - Determines whether or not case is ignored
* @returns {string} DNA string reversed
*/
 export function  reverse(dNAString){
     let dNAStringToUse = sanitizeDNAString(dNAString);

        return dNAStringToUse.split('').reverse().join('');
 }
