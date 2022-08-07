// function fibonacci_series(number) {
//     if (number === 0) {
//         return 0;
//     } else if (number === 1) {
//         return 1;
//     } else {
//         return fibonacci_series(number-2)+fibonacci_series(number-1);
//     }
// };

function fibonacci_series(number) {
    let a = 0; b=1, temp = 0;
    for(let i = 0; i< number; i++) {
        a = b;
        b = temp;
        temp = a+b;
    }
    return temp;
}

console.log(fibonacci_series(4));
console.log(fibonacci_series(15));