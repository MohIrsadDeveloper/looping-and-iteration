function prime(number) {
    let i, j=0;
    for(i =2; i<number; i++) {
        if (number % i === 0) {
            j = 1;
        }
    }
    if (j === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(prime(2));
console.log(prime(1));
console.log(prime(17));
console.log(prime(19));
console.log(prime(27));
console.log(prime(41));