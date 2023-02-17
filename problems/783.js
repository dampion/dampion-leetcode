/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    let arr=[]
    let dfs=(node)=>{
        if(node){
            arr.push(node.val)
        }
        if(node.left){
            dfs(node.left)
        }
        if(node.right){
            dfs(node.right)
        }
    }
    dfs(root)
    arr.sort((a,b)=>b-a)
    let dArr=[]
    for(i=0;i<arr.length-1;++i){
        dArr.push(arr[i]-arr[i+1])
    }
    return Math.min(...dArr)
};
