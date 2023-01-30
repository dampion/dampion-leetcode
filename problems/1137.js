/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let arr = [0, 1, 1]
    // if(n===0||n===1||n===2){
    //     return arr[n]
    // } else {
    //     while(!arr[n]){
    //         const l = arr.length
    //         arr[l]=arr[l-1]+arr[l-2]+arr[l-3]
    //     }
    //     return arr[n]
    // }
    for(i=3;i<=n;++i){
        arr[i]=arr[i-1]+arr[i-2]+arr[i-3]
    }
    return arr[n]
};
