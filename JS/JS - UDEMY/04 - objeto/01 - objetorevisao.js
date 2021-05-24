// coleção dinâmica de pares chave/valor
const produto = new Object;
produto.nome = "Cadeira";
produto["marca do produto"] = "Generica";
produto.preco = 220;

console.log(produto)/* Saída:
{ nome: 'Cadeira', 'marca do produto': 'Generica', preco: 220 }
*/
delete produto.preco;
delete produto["marca do produto"];
console.log(produto);/* Saída:
{ nome: 'Cadeira' }
*/

const carro = {
    modelo: "A4",
    proprietario: {
        nome: "Eduardo",
        idade: 39,
        endereco: {
            logradouro: "Rua 10",
            numero: 123
        }
    }, 
    condutores: [{
        nome: "Junior",
        idade: 19
    }, {
        nome: "Ana",
        idade: 42
    }],
    calculadoraValorSeguro: function() {
        // ........
    }
}

carro.proprietario.endereco.numero = 100;
carro["proprietario"]["endereco"]["logradouro"] = "Av. Gigante"
console.log(carro);/* Saída:
{
  modelo: 'A4',
  proprietario: {
    nome: 'Eduardo',
    idade: 39,
    endereco: { logradouro: 'Av. Gigante', numero: 100 }
  },
  condutores: [ { nome: 'Junior', idade: 19 }, { nome: 'Ana', idade: 42 } ],
  calculadoraValorSeguro: [Function: calculadoraValorSeguro]
}
*/

// delete carro.condutores
delete carro.proprietario.endereco;
delete carro.calculadoraValorSeguro;
console.log(carro);/* Saída:
{
  modelo: 'A4',
  proprietario: { nome: 'Eduardo', idade: 39 },
  condutores: [ { nome: 'Junior', idade: 19 }, { nome: 'Ana', idade: 42 } ]
}
*/
console.log(carro.condutores);/* Saída:
[ { nome: 'Junior', idade: 19 }, { nome: 'Ana', idade: 42 } ]
*/
console.log(carro.condutores.length);/* Saída:
2
*/

