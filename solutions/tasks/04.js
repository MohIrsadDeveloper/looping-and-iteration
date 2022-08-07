function find_the_maximum_integer_n(number) {
    let sum = 0, i=1;
    while (sum<=number) {
        sum += i;
        i++;
    }
    return i-2;
};
console.log(find_the_maximum_integer_n(10));
console.log(find_the_maximum_integer_n(25));
console.log(find_the_maximum_integer_n(366));