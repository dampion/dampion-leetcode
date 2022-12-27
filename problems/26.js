/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const len = nums.length
    if(len===0||len===1)return len
    let i=0,j=0
    while(j<len){
        if(nums[j]!==nums[i]){
            i++
            nums[i]=nums[j]
            j++
        } else j++
    }
    return i+1
};
