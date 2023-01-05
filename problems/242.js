/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // if(s.length!==t.length){
    //     return false
    // }
    // return reFormStr(s)===reFormStr(t)

    // solution2
    if(s.length!==t.length){
        return false
    }
    let sArr=new Array(26).fill(0)
    let tArr=new Array(26).fill(0)
    for(i=0;i<s.length;i++){
        // a - 97, A - 65
        sArr[s.charCodeAt(i)-97]++
        tArr[t.charCodeAt(i)-97]++
    }
    return sArr.join('')===tArr.join('')
};

// function reFormStr(str){
//     return str.split('').sort().join('')
// }
