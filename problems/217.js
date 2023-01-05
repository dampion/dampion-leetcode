/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj= new Map()
    for(i=0;i<nums.length;i++){
        if (obj.has(nums[i])){
            return true
        } else {
            obj.set(nums[i], 1)
        }
    }
    return false
};
