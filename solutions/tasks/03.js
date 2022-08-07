function sumOfCubeOf_all_interger_from_1(number) {
    let sum = 0, i = 1;
    while (i <= number) {
        let cube = i * i * i;
        sum += cube;
        i++;
    }
    return sum;
};
console.log(sumOfCubeOf_all_interger_from_1(5));
console.log(sumOfCubeOf_all_interger_from_1(2));