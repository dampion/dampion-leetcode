/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let ans = []
    for(i=0;i<=rowIndex;i++){
        if(i===0){
            ans.push([1])
        } else if (i===1){
            ans.push([1,1])
        } else {
            let arr =[1]
            for(j=0;j<i-1;j++){
                arr.push(ans[i-1][j]+ans[i-1][j+1])
            }
            arr.push(1)
            ans.push(arr)
        }
    }
    return ans[rowIndex]
};
