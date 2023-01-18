/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
    if(!hasApple.filter(i=>i).length)return 0
    let graphArr = new Array(n)
    for(i=0;i<n;++i){
        graphArr[i]=[]
    }
    // for(i=0;i<edges.length;++i){
    //     graphArr[edges[i][0]].push(edges[i][1])
    //     graphArr[edges[i][1]].push(edges[i][0])
    // }
    for(let x of edges){
        graphArr[x[1]].push(x[0])
        graphArr[x[0]].push(x[1])
    }

    return dfs(-1, 0, graphArr, hasApple)
};

function dfs(prev, curr, graphArr, hasApple){
    let ans=0
    for(let x of graphArr[curr]){
        if(x!==prev){
            let res = dfs(curr, x, graphArr, hasApple)
            if(res>0||hasApple[x]){
                ans+=res+2
            }
        }
    }
    return ans
}
