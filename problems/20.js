/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length===1){
        return false
    }
    let vA = []
    for(i=0;i<s.length;i++){
        if(i===0){
            vA.push(s[i])
        } else {
            if(s[i]===')'){
                if(vA.pop()!=='('){
                    return false
                }
            } else if(s[i]==='}'){
                if(vA.pop()!=='{'){
                    return false
                }
            } else if(s[i]===']'){
                if(vA.pop()!=='['){
                    return false
                }
            } else {
                vA.push(s[i])
            }
        }
    }
    return vA.length===0
};
