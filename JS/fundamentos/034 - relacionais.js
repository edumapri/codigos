console.log("01 - ", '1' == 1);// Saída: true
console.log("02 - ", '1' === 1);// Saída: false
console.log("03 - ", '3' != 3);// Saída: false
console.log("04 - ", '3' !== 3);// Saída: true

console.log("05 - ", '3' < 2);// Saída: false
console.log("06 - ", '3' > 2);// Saída: true
console.log("07 - ", '3' <= 2);// Saída: false
console.log("08 - ", '3' >= 2);// Saída: true

const d1 = new Date(0);
const d2 = new Date(0);
console.log("Valor de d1", d1);
console.log("Valor de d2", d2);
console.log("09 > d1 === d2 = ", d1 === d2);// Saída: false pois está comparando uma referência de memória
console.log("10 > d1 == d2 = ", d1 == d2);// Saída: false pois está comparando uma referência de memória
console.log("11 - ", d1.getTime() === d2.getTime());// Saída: true

console.log("12 - ", undefined == null);// Saída: true
console.log("13 - ", undefined === null);// Saída: false