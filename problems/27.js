/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length===0)return 0
    let i=0,j=0
    while(j<nums.length){
        if(val!==nums[j]){
            nums[i]=nums[j]
            i++
            j++
        } else j++
    }
    return i
};
