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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root||(!root.left&&!root.right))return true
    const dfs=(node)=>{
        if(!node)return 0
        if(!node.left&&!node.right)return 1
        return Math.max(dfs(node.left), dfs(node.right))+1
    }
    let leftHeight=dfs(root.left)
    let rightHeight=dfs(root.right)
    return Math.abs(leftHeight-rightHeight) < 2 && isBalanced(root.left) && isBalanced(root.right)
};
