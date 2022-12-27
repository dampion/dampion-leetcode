/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let arr = [1,2]
    if (n<=2) {
        return arr[n-1]
    } else {
        for(i=2;i<n;i++){
            arr[i] = arr[i-1]+arr[i-2]
        }
        return arr[n-2]+arr[n-3]
    }
};