let valor; // não inicializada
console.log(valor); // saída: undefined

valor = null; // ausência de valor
console.log(valor); // saída: null

// console.log(valor.toString()); // Erro!!

const produto = {}; 
console.log(produto.preco); // saída: undefined
console.log(produto); // saida: {}

produto.preco = 3.50;
console.log(produto); // saída: { preco: 3.5 }

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco); // saída: false
// delete produto.preco
console.log(produto); // saída: { preco: undefined }

produto.preco = null; // sem preço
console.log(!!produto.preco); // saída: false
console.log(produto); // saída: { preco: null }

