const peso1 = 1.0;
const peso2 = Number("2.0");

console.log(peso1, peso2);

// Verifica se a constante peso1 é um número do tipo inteiro
console.log(Number.isInteger(peso1));

// Verifica se a constante peso2 é um número do tipo inteiro
//console.log(Number.isInterger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = (avaliacao1 * peso1) + (avaliacao2 * peso2);
const media = total / (peso1 + peso2);

// Não altera o valor final da constante "media", serve apenas para visualizar o valor com duas casas decimais
console.log(media.toFixed(2));

// Apresenta a constante "media" em binário
console.log(media.toString(2));

console.log(typeof media);
console.log(typeof Number);


