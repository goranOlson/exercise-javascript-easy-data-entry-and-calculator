/* 1. Ask the user for their name and print it in console */

const userName = prompt('What is your name?');

console.log('Welcome user: ' + userName);



/* 2. Use the prompt to ask the user for their year of birth. */
const birthYear = prompt('What year were you born?');



/* 3. Calculate the age of the user */
const year = new Date().getFullYear();
// console.log('year: ' + year);
const yearsOld = year - birthYear;

console.log(`${userName}, you are ${yearsOld} years old`);



/* 4. Use the prompt to ask the user for two numbers. */
const nbr1 = prompt('Please enter a number');
const nbr2 = prompt('Please enter another number');



/* 5. Add arithmetic operators */
const number1 = parseInt(nbr1);
const number2 = parseInt(nbr2);
// console.log(`${number1} ${number2}`);

console.log('Addition: ' + (number1 + number2));
console.log('Subtraction: ' + (number1 - number2));
console.log('Multiplication: ' + (number1 * number2));
console.log('division: ' + (number1 / number2));

alert("Please view the results in the browsers console!");