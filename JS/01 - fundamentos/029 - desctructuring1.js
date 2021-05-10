// novo recurso do ES2015

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereço: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade);// Saída: Ana 5

const { nome: n, idade: i } = pessoa;
console.log(n, i);// Saída: Ana 5

const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);// Saída: undefined true

const { endereço: { logradouro, numero, cep} } = pessoa;
console.log(logradouro, numero, cep);// Saída: Rua ABC 1000 undefined

const { conta: { ag, num } } = pessoa;
console.log(ag, num); /* Saída:
c:\Dropbox\CURSANDO\FRONT END\exercicios-js\fundamentos\desctructuring1.js:24
const { conta: { ag, num } } = pessoa;
                 ^

TypeError: Cannot read property 'ag' of undefined
*/

