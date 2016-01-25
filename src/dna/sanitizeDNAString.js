//import isValid from './isValid';
import {invalidDNAMessage } from './standardMessage';

// internal use only
export function sanitizeDNAString(dNAString) {
    if (false) {
        throw new Error(invalidDNAMessage(dNAString));
    }
    return dNAString.trim().toUpperCase();
};
