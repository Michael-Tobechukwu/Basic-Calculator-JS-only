// Take the operator from the user through prompt box in JavaScript
const operator = prompt('Enter operator to perform the calculation ( either +, -, X or / ): ');

// Accept the number from the user through prompt box  

const number1 = parseFloat(prompt ('Enter the first number: '));
const number2 = parseFloat(prompt ('Enter the second number: '));  
  
let result; // declaration of the result variable.

// Defining the calculator condition in JavaScript.  

if (operator == '+') {    
  result = number1 + number2;  // addition
}  
else if (operator == '-') {   
    result = number1 - number2; // subtraction 
}  
else if (operator == '*') {   
    result = number1 * number2;  // multiplication
}  
else {  
    result = number1 / number2; // division 
}  
  
// display the result of the calculation  
window.alert(" Result is " + result. "Thanks for using my  "); 
