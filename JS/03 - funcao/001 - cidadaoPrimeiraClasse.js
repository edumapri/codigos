// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() { }

// Armazenar em uma variável
const fun2 = function () { }

// Armazenar em um array
const vetor = [function (a, b) { return a + b}, fun1, fun2];
console.log(vetor[0](2, 3));// Saída: 5

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return "Opá"}
console.log(obj.falar());// Saída:  Opá

// Passar função como parametro
function run(fun){
    fun();
}
run(function () { console.log(`Executando...`) })// Saída: Executando...

// Uma função pode retornar/conter uma função
function soma(a, b){
    return function (c) {
        console.log(a + b + c);
    }
}
soma(2, 3)(4);// Saída: 9

const cincoMais = soma(2, 3);
cincoMais(4);// Saída: 9