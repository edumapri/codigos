const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (let i in notas){
    console.log(i, notas[i]);
}/* Saída:
0 6.7
1 7.4
2 9.8
3 8.1
4 7.7
*/

const pessoa = {
    nome: "Ana",
    sobrenome: "Silva", 
    idade: 29,
    peso: 64
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`);
}/* Saída:
nome = Ana
sobrenome = Silva
idade = 29
peso = 64
*/