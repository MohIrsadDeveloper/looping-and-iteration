function reverse(number) {
    let rem, n = 0;
    while(number > 0) {
        rem = number % 10;
        n = n*10 + rem;
        number = parseInt(number/10);
    };
    console.log(n);
};
reverse(12345)
reverse(124436)
reverse(15332545436)