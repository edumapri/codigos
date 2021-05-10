let a = 3;

global.b = 123;

this.c = 456;
this.d = false;
this.e = "teste";

console.log(a);// Saída: 3
console.log(global.b);// Saída: 123
console.log(this.c);// Saída:  456
console.log(module.exports.c);// Saída: 456
console.log(module.exports === this);// Saída: true
console.log(module.exports);/* 
{ c: 456, d: false, e: 'teste' }
*/

// criando uma variável maluca: sem var e let!
abc = 3; // não faça essa cagada
console.log(global.abc);// Saída: 3
