
/*Question 1
Get user to input a number using prompt("Enter a number:"). Check if the number is
a multiple of 5 or not.
*/

// let num = prompt("Enter a Number: ");

// if(num % 5 == 0){
//     console.log(num, " is Divisible by 5")
// }else {
//     console.log(num, "is NOT divisible by 5");
// }



/*
Question 2
Write a code which can give grades to students according to their scores:

90-100, A
70-89, B
60-69, c
50-59, D
0-49, F
*/

let marks = prompt("Enter your Marks: ");
let score;

if(marks<50){
    score= "F";
} else if(marks <= 59){
    score = "D";
}else if( marks <= 69){
    score = "C";
}else if(marks <= 89){
    score = "B";
}else if ( marks <= 100){
    score= "A";
}

console.log("Your Grade is ",score);