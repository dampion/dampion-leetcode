/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // let carry = 0;
    // let result = "";

    // // Loop through both strings from the right to left
    // let i = a.length - 1, j = b.length - 1;
    // while (i >= 0 || j >= 0 || carry > 0) {
    //     const sum = (i >= 0 ? parseInt(a[i]) : 0) + (j >= 0 ? parseInt(b[j]) : 0) + carry;
    //     result = (sum % 2) + result;
    //     carry = Math.floor(sum / 2);
    //     i--;
    //     j--;
    // }

    // return result;
    const intA = `0b${a}`
    const intB = `0b${b}`
    const sum = BigInt(intA) + BigInt(intB)

    return sum.toString(2)
};
