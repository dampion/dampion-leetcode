/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let arr=gas.map((val,idx)=>val-cost[idx])
    let total=arr.reduce((a,c)=>a+c,0)
    if(total<0)return-1
    let fP=null
    let curVal=0
    for(i=0;i<gas.length;i++){
        if(fP===null){
            if(arr[i]>=0){
                fP=i
                curVal+=arr[i]
            }else {
                continue
            }
        } else{
            curVal+=arr[i]
            if(curVal<0){
                fP=null
                curVal=0
            }
        }
    }
    return fP
};
