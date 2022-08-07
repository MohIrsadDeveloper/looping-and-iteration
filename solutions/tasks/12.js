function number_is_Armstrong(number) {
    let sum = 0, rem, power, num = number, noOfDigit = number.toString().length;
    while (num > 0) {
        rem = num % 10;
        power = Math.pow(rem, noOfDigit);
        sum += power;
        num = parseInt(num / 10);
    }
    if (sum === number) {
        return true;
    } else {
        return false;
    }
};
console.log(number_is_Armstrong(153));
console.log(number_is_Armstrong(54748));