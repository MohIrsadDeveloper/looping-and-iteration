function smallest_round_number_not_lessthan_number(number) {
    let rem, num = 0;
    rem = number%10;
    let add = 10 - rem;
    num = number + add;
    return num;
};
console.log(smallest_round_number_not_lessthan_number(52));
console.log(smallest_round_number_not_lessthan_number(596));