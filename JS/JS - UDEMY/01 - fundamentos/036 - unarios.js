let num1 = 1;
let num2 = 2;

num1++;
console.log(num1);// Saída: 2 
--num1;
console.log(num1);// Saída: 1

console.log(++num1 === num2--);// Saída: true
console.log(num1);// Saída: 2
console.log(num2);// Saída: 1
console.log(num1 === num2);// Saída: false

