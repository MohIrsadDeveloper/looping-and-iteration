function replace_number_with_sum_digit(number) {
    let sum = 0, num = number, noOfDigits;
    while (num > 0) {
        rem = num % 10;
        sum += rem;
        num = parseInt(num / 10);
        noOfDigits = sum.toString().length;
    }
    return noOfDigits;
};
console.log(replace_number_with_sum_digit(123));
console.log(replace_number_with_sum_digit(179));
console.log(replace_number_with_sum_digit(9971737089));