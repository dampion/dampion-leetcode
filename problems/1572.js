/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let result=0
    for(i=0;i<mat.length;i++){
        result+=mat[i][i]
        result+=mat[i][mat.length-1-i]
        if(mat.length%2===1 && i===(mat.length-1)/2){
            result-=mat[i][mat.length-1-i]
        }
    }
    return result
};
