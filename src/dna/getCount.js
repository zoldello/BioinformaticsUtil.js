import { sanitizeDNAString } from './sanitizeDNAString'

 export function  getCount(dNAString){
     let dNAStringToUpper,
     nucleotides = {
         'A': 0,
         'C': 0,
         'T': 0,
         'G': 0
     };

     dNAStringToUpper = sanitizeDNAString(dNAString);

     for (let n of dNAStringToUpper) {
         nucleotides[n] = nucleotides[n] + 1;
     }
     return [nucleotides.A, nucleotides.C, nucleotides.G, nucleotides.T ].join(' ');
 }
