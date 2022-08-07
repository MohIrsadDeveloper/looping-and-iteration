function sumOf_first_ten_multiple(number) {
    let sum = 0, i=1;
    while (i<=10) {
        let multiple = number*i;
        sum = sum + multiple;
        i++;
    }
    return sum;
};
console.log(sumOf_first_ten_multiple(2));
console.log(sumOf_first_ten_multiple(3));
console.log(sumOf_first_ten_multiple(4));