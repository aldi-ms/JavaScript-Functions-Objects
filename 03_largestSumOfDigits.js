'use strict';

function findLargestBySumOfDigits(arr) {
    var maxSum = 0;
    var iMax = -1;
    var currentSum = 0;
    var num = 0;

    for (var i = 0; i < arr.length; i++) {
        num = Math.abs(arr[i]);
        if (!isInteger(num))
            return undefined;
        currentSum = sumOfDigits(num);
        if (currentSum > maxSum) {
            iMax = i;
            maxSum = currentSum;
        }
    }
    return arr[iMax];
}

function isInteger(n) {
    return n === +n && n === (n|0);
}

function sumOfDigits(num) {
    var sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(findLargestBySumOfDigits([5, 10, 15, 111]));
console.log(findLargestBySumOfDigits([33, 44, -99, 0, 20]));
console.log(findLargestBySumOfDigits(['hello']));
