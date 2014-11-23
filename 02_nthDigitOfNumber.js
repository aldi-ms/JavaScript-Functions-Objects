'use strict';

function findNthDigit(arr) {
    arr[1] = arr[1].toString().replace(/\D+/g, '');
    if (arr[1].toString().length < arr[0])
        return 'The number doesn’t have ' + arr[0] + ' digits';

    for (var i = 1; i < arr[0]; i++)
        arr[1] /= 10;

    return Math.floor(arr[1] % 10);
}


console.log(findNthDigit([2, 12]));
console.log(findNthDigit([6, 923456]));
console.log(findNthDigit([3, 1451.78]));
console.log(findNthDigit([3, 1.2]));