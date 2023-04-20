/*
    In JavaScript, onjects are compared by their identity. Therefore a = {a: 10} and b ={a: 10} are different.
    The code below aims to rectify that by comparing the values of 2 objects and not  by identity.
    I understand it is very error-prone. This makes it a good first contribution for beginners.
*/


deepCompare = function(obj1, obj2) {
    const keys = { firstkey: Object.keys(obj1), secondKey: Object.keys(obj2) };
    let match = null;
    let key = keys.firstkey[0];
    let key2 = keys.secondKey[0];
    let firstValue = obj1[key];
    let secondValue = obj2[key2];
    if(firstValue == secondValue) {
        match = true
    } else {
        match = false
    }

    if(match) {
        return `${firstValue} and ${secondValue} match`;
    } else {
        return `${firstValue} and ${secondValue} don't match`;
    }
}

module.exports = deepCompare;