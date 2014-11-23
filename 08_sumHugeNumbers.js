'use strict';

function sumTwoHugeNumbers(value) {
    var longer = value[0].length >= value[1].length ? value[0] : value[1];
    var shorter = value[1].length > value[0].length ? value[0] : value[1];
    var res = '';
    var num = 0;
    var carry = false;

    while (longer.length > shorter.length)
        shorter = '0' + shorter;

    for (var i = longer.length - 1; i >= 0; i--) {
        num = Number(longer[i]) + Number(shorter[i]);
        if (carry) num++;
        carry = num > 9;

        res = num % 10 + res;
    }
    return res;
}



console.log(sumTwoHugeNumbers(['155', '65']));
console.log(sumTwoHugeNumbers(['123456789', '123456789']));
console.log(sumTwoHugeNumbers(['887987345974539', '4582796427862587']));
console.log(sumTwoHugeNumbers(['347135713985789531798031509832579382573195807', '817651358763158761358796358971685973163314321']));