/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let p=0,n=0
    for(i=0;i<nums.length;i++){
        if(nums[i]>0){
            p++
        }else if(nums[i]<0){
            n++
        }
    }
    return Math.max(p,n)
};
