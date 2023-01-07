/**
 * @param {number} value
 * @param {number} k
 */
var DataStream = function(value, k) {
    this.arr=[]
    this.value=value
    this.k=k
};

/** 
 * @param {number} num
 * @return {boolean}
 */
DataStream.prototype.consec = function(num) {
    this.arr.push(num)
    if(this.arr.length<this.k){
        return false
    }
    for(i=this.arr.length-1;i+this.k>=this.arr.length;i--){
        if(this.arr[i]!==this.value){
            return false
        }
    }
    return true
};

/** 
 * Your DataStream object will be instantiated and called as such:
 * var obj = new DataStream(value, k)
 * var param_1 = obj.consec(num)
 */
