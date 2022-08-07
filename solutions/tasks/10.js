function sumOf_following_series(number) {
    let sum =0, num = 1;
    for(let i=1; i<=number; i++) {
        let s = num/i;
        sum = (sum + s);
        result = sum.toFixed(2);
    }
    return result;
};
console.log(sumOf_following_series(75));