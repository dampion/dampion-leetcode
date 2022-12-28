/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(i=0;i<nums.length;i++){
        if (nums[i]>=target){
            return i
        } else if (nums[i]<target){
            if (i===nums.length-1){
                return i+1
            }
            continue
        }
    }
};
