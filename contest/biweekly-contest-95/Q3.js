/**
 * @param {number[]} nums
 * @return {number}
 */
var xorBeauty = function(nums) {
    let beauty=0
    for(let x of nums){
        beauty=beauty^x
    }
    return beauty
};
