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
var diameterOfBinaryTree = function(root) {
    if(!root||(!root.left&&!root.right))return 0
    let max=0
    dfs(root)
    function dfs(n){
        if(!n)return 0
        let left=dfs(n.left, max)
        let right=dfs(n.right, max)
        max=Math.max(max,left+right)
        return Math.max(left, right)+1
    }
    return max
};
