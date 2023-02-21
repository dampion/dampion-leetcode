/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let cur=0
    for(i=1;i<nums.length;i+=2){
        if(nums[cur]!==nums[i]){
            return nums[cur]
        }
        cur+=2
    }
    return nums[cur]
};
