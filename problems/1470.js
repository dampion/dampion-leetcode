/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr=[]
    for(i=0;i<nums.length/2;++i){
        // arr.push(nums[i])
        // arr.push(nums[i+n])
        arr.push(nums[i], nums[i+n])
    }
    return arr
};
