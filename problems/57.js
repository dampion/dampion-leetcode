/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let [start, end] = newInterval
    let l=[],r=[]
    for(i=0;i<intervals.length;++i){
        if(intervals[i][1] < start)l.push(intervals[i])
        else if(intervals[i][0] > end)r.push(intervals[i])
        else {
            start = Math.min(start, intervals[i][0])
            end = Math.max(end, intervals[i][1])
        }
    }
    return [...l, [start, end], ...r]
};
