/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let msum=0, max=nums[0],total=0,min=nums[0], nsum=0
    for(i=0;i<nums.length;++i){
        total+=nums[i]
        msum+=nums[i]
        nsum+=nums[i]
        max=Math.max(max, msum)
        min=Math.min(min, nsum)
        if(msum<0){
            msum=0
        }
        if(nsum>0){
            nsum=0
        }
    }
    let res = Math.max(max, total-min)
    return res === 0 ? Math.max(...nums) : res
};
