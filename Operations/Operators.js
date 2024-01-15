/*
Used to perform some operation on data

Arithmetic Operators
+ - * /

1> Modulus
2> Exponentiation
3> Increment
4> Decrement
*/

//Arithmetic Operators
let a = 5;
let b = 2;

//They are using 2 operands to operate
console.log("a = ",a," b = ",b)
console.log("a + b = ",a + b);
console.log("a - b = ",a - b);
console.log("a * b = ",a * b);
console.log("a / b = ",a / b);
console.log("a / b = ",a / b);
console.log("a ** b = ",a ** b);

console.log("\n");// print new line

//Unary Operator use only 1 operand
// Increment  -->  a++ => a+1
// Decrement  -->  a-- => a-1

// Post Increment -> a++ (Agle Line se Increase hoga)
// Pre Increment -> ++a (Phele hi increase ho jayega)


a++;
console.log("After Increment of A ",a);
a--;
console.log("After Decrement of A ",a);

//______________________________________________________________________________________________________________________________________

/*
Assignment Operator
=  +=  -=  *=  /=  %=  **=

-------------------------------------------------------------------------------------------------------

Comparison Operators  (RETURN IN false or True)
==   -> Equal to
!=   -> Not equal to
===  -> Equal to & type 
!==  -> Not equal to & type
>    -> Greater than
>=   -> Greater and equal to
<    -> Smaller
<=   -> Smaller and Equal to


------------------------------------------------------------------------------------------------------------------------------------------

Logical Operators (Return in True or False)
&&  -> Logical AND (it need all the condition to be True to give output True)

||  -> Logical OR (If any one Statement is True than the output is True)

!   -> Logical NOT 


____________________________________________________________________________________________________________________________________________

Ternary Operators

condition ? true output : false output
eg:-
age > 18 ? "Adult" : "not adult";
*/