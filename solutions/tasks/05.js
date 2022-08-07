function sumOf_multipleOf_3_and_5(number) {
    let sum = 0, i= 3;
    while (i < number) {
        if ((i%3===0) || (i%5===0)) {
            sum += i;
        }
        i++;
    }
    return sum;
};
console.log(sumOf_multipleOf_3_and_5(8));
console.log(sumOf_multipleOf_3_and_5(20));