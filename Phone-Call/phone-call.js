function solution(min1, min2_10, min11, s) {
    if(s < min1){
        return 0;
    } // can't make first call
    if (s < min1 + min2_10 * 9) {
        return 1 + Math.floor((s - min1) / min2_10);
    } // only have enough to make a partial phone call in min 2 - 10
    
    s -= min1 + min2_10 * 9; // s decreases throughout call
     return 10 + Math.floor(s/min11); // 10th min plus remaining s / min11 cents
}