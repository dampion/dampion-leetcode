/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    // return (BigInt(num.join(''))+BigInt(k)).toString().split('')
    let index=num.length-1
    while(k){
        if(index<0){
            num.unshift(k%10)
        }else{
            k+=num[index]
            num[index]=k%10
            index--
        }
        k=Math.floor(k/10)
    }
    return num
};
