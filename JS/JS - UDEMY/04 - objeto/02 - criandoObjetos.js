// usando a notacao literal
const obj1 = {}
console.log(obj1);/* Saída:
{}
*/

// Object em JS
console.log(typeof Object, typeof new Object);/* Saída:
function object
*/
const obj2 = new Object;
console.log(obj2);/* Saída:
{}
*/

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    }
}

const p1 = new Produto("Caneta", 7.99, 0.15);
const p2 = new Produto("notebook", 2998.99, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());/* Saída:
6.7915 2249.2425
*/

// Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = criarFuncionario("João", 7980, 4);
const f2 = criarFuncionario("Maria", 11400, 1);
console.log(f1.getSalario(), f2.getSalario());/* Saída:
6916 11020
*/

// Object.create
const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);/* Saída:
[Object: null prototype] { nome: 'Ana' }
*/

// uma função famosa que retorno Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info);/* Saída:
Sou um JSON
*/

