function factorial_of_number(number) {
    let product = 1; 
    while (number >= 1) {
        product = product*number;
        number--;
    }
    return product;
};
console.log(factorial_of_number(5));
console.log(factorial_of_number(4));
console.log(factorial_of_number(6));
