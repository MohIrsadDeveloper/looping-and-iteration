function factorial_of_that_number(number) {
    let i = 1, product= 1;
    while (i<=number) {
        product *= i; // product = product * i;
        i++;
    }
    return product;
}
console.log(factorial_of_that_number(6));