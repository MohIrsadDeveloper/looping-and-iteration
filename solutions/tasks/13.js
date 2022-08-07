function next_smallest_prime_number(number) {
    for(let i = number + 1; ; i++) {
        let prime = true;
        for(let j=2; j*j <= i; j++) {
            if (i%j === 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            return i;
        }
    }
};
console.log(next_smallest_prime_number(19));
console.log(next_smallest_prime_number(35));
console.log(next_smallest_prime_number(100));