/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let max=Number.MIN_SAFE_INTEGER,min=Number.MAX_SAFE_INTEGER,total=0
    for(i=0;i<salary.length;i++){
        total+=salary[i]
        if(salary[i]>max) {
            max=salary[i]
        }
        if(salary[i]<min){
            min=salary[i]
        }
    }
    total -= max+min
    return parseInt(total*100000/(salary.length-2))/100000
};
