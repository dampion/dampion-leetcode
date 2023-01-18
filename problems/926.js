/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let count=0, fcount=0
    for(i=0;i<s.length;++i){
        if(s[i]==='1')count++
        else if(s[i]==='0')fcount++
        fcount=Math.min(count, fcount)
    }
    return fcount
};
