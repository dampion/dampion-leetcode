/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    let res=new Array(grid.length-2)
    for(i=0;i<grid.length-2;++i){
        res[i]=[]
        for(j=0;j<grid.length-2;++j){
            let arr=[...grid[i].slice(j,j+3),...grid[i+1].slice(j,j+3),...grid[i+2].slice(j,j+3)]
            res[i][j]=Math.max(...arr)
        }
                                               
    }
    return res
};
