/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s === '') {
        return true
    }
    const str = s.toLowerCase().replace(/[^A-Za-z0-9]/gi, '')
    let j = str.length-1
    for(i=0;i<str.length;i++){
        if(str.charAt(i)!==str.charAt(j-i)){
            return false
        }
    }
    return true

};
