function first_ten_multipeOf_allNumber(number) {
    let sum = 0, i = 1
    while (i <= number) {
        let j = 1;
        while (j <= 10) {
            let multiple = i * j;
            sum += multiple;
            j++;
        }
        i++;
    }
    return sum;
};
console.log(first_ten_multipeOf_allNumber(2));
console.log(first_ten_multipeOf_allNumber(3));
console.log(first_ten_multipeOf_allNumber(34));