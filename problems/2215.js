/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    // let ans1=[],ans2=[]
    // let visited= new Set()
    // let bothExisted=new Set()
    // for(i=0;i<nums1.length;i++){
    //     if(visited.has(nums1[i]) || bothExisted.has(nums1[i])){
    //         continue
    //     }
    //     if(nums2.includes(nums1[i])){
    //         bothExisted.add(nums1[i])
    //         continue
    //     }
    //     visited.add(nums1[i])
    //     ans1.push(nums1[i])
    // }
    // for(i=0;i<nums2.length;i++){
    //     if(visited.has(nums2[i]) || bothExisted.has(nums2[i])){
    //         continue
    //     }
    //     if(nums1.includes(nums2[i])){
    //         bothExisted.add(nums2[i])
    //         continue
    //     }
    //     visited.add(nums2[i])
    //     ans2.push(nums2[i])
    // }
    // return [ans1, ans2]
    let result = [[],[]]
    let set1=new Set(nums1),set2=new Set(nums2)
    for(const item of set1){
        if(!set2.has(item)){
            result[0].push(item)
        }
    }
    for(const item of set2){
        if(!set1.has(item)){
            result[1].push(item)
        }
    }
    return result
};
