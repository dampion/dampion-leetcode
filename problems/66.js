/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // primitive type BigInt, handle long numbers
    return String(BigInt(digits.join(''))+BigInt(1)).split('')
};
