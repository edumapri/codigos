function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comparTv50 = trabalho1 && trabalho2;
    // const comprarTv = !!(trabalho ^ trabalho2);// bitwise xor
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete;// operador unário

    return{comprarSorvete, comparTv50, comprarTv32, manterSaudavel}
} 

console.log(compras(true, true));/* Saída: 
{
  comprarSorvete: true,
  comparTv50: true,
  comprarTv32: false,
  manterSaudavel: false
}
*/
console.log(compras(true, false));/* Saída: 
{
  comprarSorvete: true,
  comparTv50: false,
  comprarTv32: true,
  manterSaudavel: false
}
*/
console.log(compras(false, true));/* Saída: 
{
  comprarSorvete: true,
  comparTv50: false,
  comprarTv32: true,
  manterSaudavel: false
}
*/
console.log(compras(false, false));/* Saída: 
{
  comprarSorvete: false,
  comparTv50: false,
  comprarTv32: false,
  manterSaudavel: true
}
*/
