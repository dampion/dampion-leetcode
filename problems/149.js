/**
 * @param {number[][]} points
 * @return {number}
 */
// solution 1
// var maxPoints = function(points) {
//     if(points.length<=2){
//         return points.length
//     }
//     let arr=[]
//     for(i=0;i<points.length;i++){
//         for(j=i+1;j<points.length;j++){
//             arr.push(twoPointsEquation(points[i], points[j]))
//         }
//     }
//     let map= new Map()
//     for(i=0;i<arr.length;i++){
//         if(!map.has(arr[i])){
//             map.set(arr[i], 0)
//         }
//     }
//     let arrR=[]
//     for (let key of map.keys()) {
//         let [a,b]=key.split(',')
//         let count=0
//         for(i=0;i<points.length;i++){
//             if(b===undefined){
//                 if(points[i][0]===Number(a)){
//                     count++
//                 }
//             } else {
//                 if(check(a,b,points[i])){
//                     count++
//                 }
//             }
//         }
//         arrR.push(count)
//     }
//     return Math.max(...arrR)
// };
// function twoPointsEquation(pointA, pointB){
//     //if x=1
//     if(pointA[0]===pointB[0]){
//         return `${pointA[0]}`
//     }
//     //y=ax+b, return [a,b]
//     let dA=pointA[0]-pointB[0]
//     let dY=pointA[1]-pointB[1]
//     let a=dA===0 ? 0: dY/dA
//     let b=(-pointA[0]*a+pointA[1])
//     return `${a},${b}`
// }
// function check(a,b,point){
//     return point[1]===Number((point[0]*Number(a)+Number(b)).toFixed(4))
// }

// solution 2
var maxPoints = function(points) {
    if(points.length<=2){
        return points.length
    }
    let max=1
    let n=points.length
    let a
    let set=new Set()
    for(i=0;i<n&&!set.has(points[i][0]+'-'+points[i][1]);++i){
        let localMax=1
        let same=0
        let a=points[i]
        let map=new Map()

        for(j=i+1;j<n;++j){
            if(isSame(a, points[j])){
                same++
                continue
            }
            let slope=getSlope(a,points[j])
            map.set(slope, (map.get(slope)||1)+1)
            localMax=Math.max(localMax, map.get(slope))
        }
        set.add(a[0]+'-'+a[1])
        max=Math.max(max,localMax+same)
    }
    return max
}

function isSame(pA,pB){
    return pA[0]===pB[0]&&pA[1]===pB[1]
}
function getSlope(pA,pB){
    // vertical
    if(pA[0]===pB[0]){
        return 0
    }
    // horizontal
    if(pA[1]===pB[1]){
        return Number.MAX_SAFE_INTEGER
    }
    return (pB[1]-pA[1])/(pB[0]-pA[0])
}
