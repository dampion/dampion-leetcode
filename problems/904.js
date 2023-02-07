/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let arr=[0]
    let c1=-1,c2=-1
    let count=0
    let j=0
    for(i=0;i<fruits.length;++i){
        if(c1===-1){
            c1=fruits[i]
            count++
            continue
        }
        if(fruits[i]===c1&&c2===-1){
            j++
        }
        if(fruits[i]===c1||c2===fruits[i]){
            count++
            continue
        }
        if(c2===-1){
            c2=fruits[i]
            count++
            continue
        }
        j++
        i=j
        arr.push(count)
        c1=fruits[i]
        c2=-1
        count=1
    }
    arr.push(count)
    return Math.max(...arr)
};
