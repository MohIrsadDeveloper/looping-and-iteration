function divide_firstInteger_with_secondInteger_as_remainder_zero(number1,number2) {
    let quetient;
    if (number1%number2 === 0) {
        quetient = parseInt(number1/number2);
    } else {
        quetient = number1;
    };
    return quetient;
};
console.log(divide_firstInteger_with_secondInteger_as_remainder_zero(123456,2));
console.log(divide_firstInteger_with_secondInteger_as_remainder_zero(54,11));
console.log(divide_firstInteger_with_secondInteger_as_remainder_zero(54,2));