/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(length, width, height, mass) {
    let a,b
    if(length>=10000||width>=10000||height>=10000||length*width*height>=10**9){
        a='Bulky'
    }
    if(mass>=100){
        b='Heavy'
    }
    if(a==='Bulky'&&b==='Heavy'){
        return 'Both'
    } else if(!a&&!b){
        return 'Neither'
    } else if (a&&!b){
        return 'Bulky'
    } else if (!a&&b){
        return 'Heavy'
    }
};
