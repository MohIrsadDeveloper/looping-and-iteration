// While Loop
/* 
First, let’s take a look at while loop. In a while loop, the given code is executed as long as the condition in the loop is true. The condition is specified in ( ) and the code is written in { }. In below example, as long as the condition (i <= 5) is true, the code inside { } will be executed
*/
// while (condition) {
//     //Source code
// }

// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// };

// let number = 20;
// while (number <= 30) {
//     console.log("Number is ", number);
//     number++;
// };

// Infinite Loop
/*
If you forget to update the variable in loop, the condition will always be true. It will result in an Infinite loop which will put a huge load on the computer. So, make sure to avoid such mistakes. The below example is missing the statement i = i + 1 or i++. Hence, the loop will run forever
*/
// var num = 100;
// while (num <= 100) {
//     console.log(100);
// };

// Introduction to Nested Loop in JavaScript
/*
Nested Loop is a loop that is present inside another loop. Javascript supports the nested loop. In javascript, the loop can have one or more or simply can have any number of loops defined inside another loop, and also can behave n level of nesting inside the loop. The nested loop is also called as inner loop and the loop in which the nested loop defined is an outer loop. The outer loop always executes first and then the inner loop executes. In the case of multi-level nested an outer loop executes first and then the 1 st inner loop executes and then 2 nd inner loop executes and so on. Any type of nested loop can be defined inside any type of loops.
*/

// Syntax :
/*
    Outerloop {
        Innerloop {
            // statement to be execute inside inner loop
        }
    }
*/

// Flowchart of Nested While Loop
/* 
Initially, one condition statement is being provided in the while loop if that condition of inner loop condition statement is true then loop execution will continue with the same inner loop condition forming a loop as soon as it finds that the condition is false it will come out of the inner while loop and search for the outer loop condition. If the outer loop condition comes out to be true, then it will execute all the sets of statements and information. After following all set of instructions, it will become false and the loop will come out to the main program control saying end while loop.
*/
// Syntax for nested while loop
// while (condition) {
//     // Get inside, only if condition satisfies
//     // statements to be execute inside outer loop
//     while (condition2) {
//         // Get inside, only if condition2 satisfies
//         // statements to be execute inside inner loop.
//     }
//     // statement to be execute inside outer loop
// }

function tabel_of_first_nth_Number(number) {
    let table = 1;
    let n = 1;
    let end = 10;
    while (table <= number) {
        console.log("Start table of " + table);
        while (n <= end) {
            console.log(`${table} x ${n} = `, table * n);
            n++;
        }
        console.log("End table of " + table);
        n = 1;
        table++;
    }
};
tabel_of_first_nth_Number(12)