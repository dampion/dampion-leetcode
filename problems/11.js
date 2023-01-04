/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max=0
    let [left,right]=[0,height.length-1]
    while(left<right){
        max=Math.max(max,(right-left)*Math.min(height[right],height[left]))
        if(height[right]>=height[left]){
            left++
        } else {
            right--
        }
    }
    // for(i=0;i<height.length-1;i++){
    //     let maxH=0
    //     for(j=height.length-1;j>i;j--){
    //         if (maxH&&height[j]<maxH){
    //             continue
    //         }
    //         maxH=Math.min(height[j],height[i])
    //         max=Math.max(max,(j-i)*Math.min(height[j],height[i]))
    //         if(j===height.length-1&&height[j]>=height[i]){
    //             break
    //         }
    //     }
    // }
    return max
};
