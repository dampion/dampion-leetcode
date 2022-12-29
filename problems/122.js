/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // if(prices.length === 1){
    //     return 0
    // }

    // let curshare=-1
    // let max=0
    // for(i=0;i<prices.length;i++){
    //     if(i===prices.length-1){
    //         if(curshare!==-1){
    //             max+=prices[i]-curshare
    //         }
    //     } else if (i===0){
    //         if(prices[i]<prices[i+1]){
    //             curshare=prices[i]
    //         }
    //     } else {
    //         if (curshare===-1){
    //             if(prices[i]<prices[i+1]){
    //                 curshare=prices[i]
    //             }
    //         } else {
    //             if (prices[i]>curshare) {
    //                 max+=prices[i]-curshare
    //                 curshare=-1
    //             }
    //             if(prices[i]<prices[i+1]){
    //                 curshare=prices[i]
    //             }
    //         }
    //     }
    // }
    // return max
    let max=0
    for(i=0;i<prices.length-1;i++){
        let j=i+1
        if(prices[j]>prices[i]){
            max+=prices[j]-prices[i]
        }
    }
    return max
};
