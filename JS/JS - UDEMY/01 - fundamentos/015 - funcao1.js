// Função sem retorno
function imprimirSoma(a, b) {
    console.log (a + b);
}

imprimirSoma(2, 3); // Saída: 5
imprimirSoma(2); // Saída: NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8); // Saída: 12
imprimirSoma(); // Saída: NaN

// Função com retorno
function soma(a, b = 1) {
    return a + b;
}

let resultadoSoma = soma(2, 4);
console.log(resultadoSoma); // Saída: 6
console.log(soma(2, 3)); // Saída: 5
console.log(soma()); // Saída: NaN

