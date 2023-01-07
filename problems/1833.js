/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs.sort((a,b)=>a-b)
    let count=0
    for(i=0;i<costs.length;i++){
        coins-=costs[i]
        if (coins>=0){
            count++
        } else {
            return count
        }
    }
    return count
};
