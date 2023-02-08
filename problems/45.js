/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let l= nums.length
    if(l===1)return 0
    let maxJ=nums[0]
    let count=0
    let curP=0
    while(curP+maxJ<l-1){
        let arr=[]
        let pos=[]
        for(i=1;i<=maxJ;++i){
            arr.push(nums[curP+i]+i)
            pos.push(curP+i)
        }
        count++
        let max=Math.max(...arr)
        curP=pos[arr.indexOf(max)]
        maxJ=nums[curP]
    }
    count++
    return count
};
