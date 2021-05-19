function soma() {
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i];
    }
    return soma;
}

console.log(soma());// Saída: 0
console.log(soma(1));// Saída: 1
console.log(soma(1.1, 2.2, 3.3));// Saída: 6.6

console.log(soma(1.1, 2.2, "Teste"));// Saída: 3.3000000000000003Teste
console.log(soma ('a', 'b', 'c'));// Saída: 0abc

