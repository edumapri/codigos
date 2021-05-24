// pessoa -> 123 -> {...}
const pessoa = {nome: "João"};
pessoa,nome = "Pedro";
console.log(pessoa);/*
{ nome: 'João' }
*/

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa);

pessoa.nome = "Maria";
pessoa.end = "Rua ABC";
delete pessoa.nome;

console.log(pessoa.nome);/*
João
*/
console.log(pessoa);/*
{ nome: 'João' }
*/

const pessoaConstante = Object.freeze({ nome: "João" });
pessoaConstante.nome = "Maria";
console.log(pessoaConstante);/*
{ nome: 'João' }
*/

