/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(words, target, startIndex) {
    if (!words.includes(target)){
        return -1
    } else if(words[startIndex]===target){
        return 0
    }
    let arr=[]
    for(i=0;i<words.length;i++){
        if(words[i]===target){
            if(startIndex>i){
                arr.push(startIndex-i)
                arr.push(i+words.length-startIndex)
            } else {
                arr.push(i-startIndex)
                arr.push(startIndex+words.length-i)
            }
        }
    }
    return Math.min(...arr)
};
