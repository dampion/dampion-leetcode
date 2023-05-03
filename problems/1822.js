/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let result = 1
    for(i=0;i<nums.length;i++){
        if(nums[i]===0){
            return 0
        }
        result *= nums[i]
    }
    return result > 0 ? 1 : -1
};
