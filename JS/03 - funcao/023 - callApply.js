function getPreco (imposto = 0, moeda = "$"){
	return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
} 

const produto = {
	nome: "Notebook",
	preco: 4589,
	desc: 0.15,
	getPreco
}

global.preco = 20;
global.desc = 0.1;
console.log(getPreco());// Saída: 18
console.log(produto.getPreco());// Saída: 3900.65

const carro = {
	preco: 49990,
	desc: 0.20
}

console.log(getPreco.call(carro));// Saída: 39992
console.log(getPreco.apply(carro));// Saída: 39992

console.log(getPreco.call(carro, 0.17, '$'));// Saída: 46790.64
console.log(getPreco.apply(global, [0.17, '$']));// Saída: 21.06

