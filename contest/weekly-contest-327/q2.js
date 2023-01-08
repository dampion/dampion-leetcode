/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
    let mQ=new MaxPriorityQueue({priority: (bid) => bid});
    for(i=0;i<nums.length;i++){
        mQ.enqueue(nums[i])
    }
    let score=0
    while(k){
        k--
        let maxE=mQ.dequeue().element
        score+=maxE
        mQ.enqueue(Math.ceil(maxE/3))
    }
    
    return score
};
