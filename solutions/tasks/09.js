function sumOf_even_digit(number) {
    let sum=0, rem;
    while (number>=1) {
        rem = number% 10;
        if (rem%2===0) {
            sum +=rem;
        }
        number = parseInt(number/10);
    }
    return sum;
};
console.log(sumOf_even_digit(24865748));
console.log(sumOf_even_digit(6536765433834));