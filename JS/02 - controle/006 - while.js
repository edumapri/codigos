function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opção escolhida foi ${opcao}.`);
}

console.log("Até a próxima!");/* Saída:

Opção escolhida foi 4.
Opção escolhida foi 9.
Opção escolhida foi -1.
Até a próxima!

*/

