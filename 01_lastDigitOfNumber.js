'use strict';

function lastDigitAsText(number) {
    return convertDigitToWord(Math.abs(number) % 10);
}

function convertDigitToWord(value) {
    switch (value) {
        case 0: return 'zero';
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
        default: return 'not a digit';
    }
}

console.log(lastDigitAsText(1329));
console.log(lastDigitAsText(-5));
console.log(lastDigitAsText(1));