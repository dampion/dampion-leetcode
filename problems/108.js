/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // 如果送進來的的是 空array，代表是該樹的最後一個
    if (nums.length===0){
        return null
    }
    //因為要height balance 所以root直接取最中間的數值
    let mid =Math.floor(nums.length/2) 
    let tree = new TreeNode(nums[mid])
    // left & right 直接再recursive以上即可
    tree.left=sortedArrayToBST(nums.slice(0,mid))
    tree.right=sortedArrayToBST(nums.slice(mid+1,nums.length))
    return tree
};
