function criarProduto (nome, preco) {
    return {
        nome,
        preco, 
        desconto: 0.1
    }
}

console.log(criarProduto("Notebook", 2199.49));// Saída: { nome: 'Notebook', preco: 2199.49, desconto: 0.1 }
console.log(criarProduto("Ipad", 1199.49));// Saída: { nome: 'Ipad', preco: 1199.49, desconto: 0.1 }
