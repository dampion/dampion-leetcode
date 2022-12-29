/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let count=m
    // while(m--){
    //     nums[count]=
    // }
    let count2=0
    while(n--){
        nums1[count]=nums2[count2]
        count+=1
        count2+=1
    }
    nums1.sort((a,b)=>a-b)
};
