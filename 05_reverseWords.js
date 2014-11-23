'use strict';

function reverseWordsInString(str) {
    var splitStr = str.split(/\s|_/);

    for (var i = 0; i < splitStr.length; i++)
        splitStr[i] = reverseString(splitStr[i]);

    return splitStr.join(' ');
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseWordsInString('Hello, how are you.'));
console.log(reverseWordsInString('Life is pretty good, isn’t it?'));