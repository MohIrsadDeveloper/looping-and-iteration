function GCD(number1, number2) {
    let min = (number1 < number2) ? number1 : number2;
    for (let i = min; i > 0; i--) {
        if ((number1 % i === 0) && (number2 % i === 0)) {
            return i;
        }
    }
}

// function GCD(number1, number2) {
//     if (number2 !== 0) {
//         return GCD(number2, number1%number2);
//     } else {
//         return number1
//     }
// };

console.log(GCD(30, 45));
console.log(GCD(63, 45));
console.log(GCD(100, 50));