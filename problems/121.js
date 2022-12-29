/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max=0
    let maxSold=0
    for(i=prices.length-1;i>0;i--){
        if(prices[i]>maxSold){
            maxSold=prices[i]
            for(j=i-1;j>=0;j--){
                if (maxSold-prices[j]>max){
                    max=maxSold-prices[j]
                }
            }
        }
    }
    return max
};
