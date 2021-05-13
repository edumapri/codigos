function area(largura, altura){
    const area = largura * altura;
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`);
    } else {
        return area;
    }
}

console.log(area(2, 2));// Saída: 4
console.log(area(2));// Saída: NaN "Not a Number"
console.log(area());// Saída: NaN
console.log(area(2, 3, 17, 22, 44));// Saída: 6 
console.log(area(5, 5));/* Saída:
Valor acima do permitido: 25m2.
undefined
*/

