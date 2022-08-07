function total_number_of_prime_number(number) {
    let count = 0;
    for (let i = 2; i < number; i++) {
        let prime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                prime = false;
            }
        }
        if (prime === true) {
            count += 1;
        }
    }
    return count;
};
console.log(total_number_of_prime_number(10));
console.log(total_number_of_prime_number(11));
console.log(total_number_of_prime_number(100));
console.log(total_number_of_prime_number(12));
console.log(total_number_of_prime_number(2));
console.log(total_number_of_prime_number(3));
console.log(total_number_of_prime_number(5));
