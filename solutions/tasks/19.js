function sum_of_series(number) {
    let sum = 0;
    for(let i=1; i<=number; i++) {
        let power = Math.pow(i,i);
        sum += power;
    }
    return sum;
};
console.log(sum_of_series(1));
console.log(sum_of_series(2));
console.log(sum_of_series(3));
console.log(sum_of_series(4));