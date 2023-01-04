/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    // let arr=String(num).split('').reverse()
    // return arr.map((val,idx)=>{
    //     if(idx===0){
    //         return ['','I','II','III','IV','V','VI','VII','VIII','IX'][val]
    //     } else if (idx===1){
    //         return ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC',][val]
    //     } else if (idx===2){
    //         return ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM',][val]
    //     } else if (idx===3){
    //         return ['','M','MM','MMM','MMM'][val]
    //     }
    // }).reverse().join('')
    let I=['','I','II','III','IV','V','VI','VII','VIII','IX'],
    X=['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC',],
    C=['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM',],
    M=['','M','MM','MMM','MMM']
    return M[Math.floor(num/1000)%10]+
    C[Math.floor(num/100)%10]+
    X[Math.floor(num/10)%10]+
    I[num%10]
};
