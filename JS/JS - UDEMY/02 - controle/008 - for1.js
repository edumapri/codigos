let contador = 1;
while(contador <= 10) {
    console.log(`contador = ${contador}`);
    contador++;
}/* Saída
contador = 1
contador = 2
contador = 3
contador = 4
contador = 5
contador = 6
contador = 7
contador = 8
contador = 9
contador = 10
*/

for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`);
}/* Saída
i = 1
i = 2
i = 3
i = 4
i = 5
i = 6
i = 7
i = 8
i = 9
i = 10
*/

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];
for(let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`);
}/* Saída
nota = 6.7
nota = 7.4
nota = 9.8
nota = 8.1
nota = 7.7
*/