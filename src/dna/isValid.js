
/**
*   Ensures DNA string is valid
*   @param {string} dNAString - DNA String
*   @returns {boolean} True if DNA is valid, false otherwise
*/
export function isValid(dNAString) {
    let dNAStringToUse,
            isDNAValid = true;

            if (!dNAString || typeof dNAString !== 'string') {
                return false;
            }

            dNAStringToUse = dNAString.trim().toUpperCase();

            for (let n of dNAStringToUse) {
                if (n === 'A' || n === 'C' || n === 'G' || n === 'T') {
                    continue;
                }

                isDNAValid= false;
                break;
            };

            return isDNAValid;
}
