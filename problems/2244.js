/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    let obj={}
    for(i=0;i<tasks.length;++i){
        // if(obj[tasks[i]]){
        //     obj[tasks[i]]+=1
        // } else {
        //     obj[tasks[i]]=1
        // }
        obj[tasks[i]]=(obj[tasks[i]]||0)+1
    }
    let count=0
    let timesArr=Object.values(obj)
    for(i=0;i<timesArr.length;i++){
        if (timesArr[i]===1){
            return -1
        }
        // while(timesArr[i]>0){
        //     if(timesArr[i]>4||timesArr[i]===3){
        //         timesArr[i]-=3
        //         count+=1
        //     } else {
        //         timesArr[i]-=2
        //         count+=1
        //     }
        // }
        count+=Math.ceil(timesArr[i]/3)
    }
    return count
};
