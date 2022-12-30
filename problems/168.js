/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const alphaBet = ['Z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', "Z"]
    if (columnNumber<=26){
        return alphaBet[columnNumber]
    }
    let ans=[]
    while(columnNumber>26){
        ans.unshift(alphaBet[columnNumber%26])
        if (columnNumber%26===0){
            columnNumber=parseInt(columnNumber/26)-1
        } else {
            columnNumber=parseInt(columnNumber/26)
        }
    }
    ans.unshift(alphaBet[columnNumber])
    return ans.join('')
};
