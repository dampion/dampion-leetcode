/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy1=Infinity
    let profit1=0
    let buy2=Infinity
    let profit2=0
    for(price of prices){
	// 第一次買進
        buy1=Math.min(buy1,price)
	// 第一次賣出
	// 每天不斷的計算第一單賣最多
        profit1=Math.max(profit1,price-buy1
	// 第二次買進，等同於再投資的概念
	// 第二次買進的價錢會扣除第一次的獲利，來確定第二次買進會再第一次賣出之後
        buy2=Math.min(buy2,price-profit1)
	// 第二次賣出，就是最大價錢-第一次買進
        profit2=Math.max(profit2,price-buy2)
    }
    return profit2
};
