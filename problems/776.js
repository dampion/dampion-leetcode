/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start=0,end=nums.length
    let idx=Math.floor((start+end)/2)
    while(nums[idx]!==target&&start<end){
        if(target>nums[idx]){
            start=idx+1
        } else {
            end=idx-1
        }
        idx=Math.floor((start+end)/2)
    }
    return nums[idx]===target?idx:-1
};
