function tratarErroELancar(erro) {
    // throw new Error("...");
    // throw 10;
    // throw true;
    // throw "mensagem";
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirCaixaAlta(obj){
    try {
        console.log(obj.name.toUpperCase() + "!!!");
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log("Final");
    }
}

/* Sem o erro 
const obj = { name: "Roberto" }
imprimirCaixaAlta(obj);
*/

// Com o erro trocando a atributo name por nome 
const obj = { nome: "Roberto" }
imprimirCaixaAlta(obj);/* Saída:
Final

t:\CURSANDO\JS\fundamentos\039 - erro.js:6
    throw {
    ^
{
  nome: 'TypeError',
  msg: "Cannot read property 'toUpperCase' of undefined",
  date: 2021-05-10T17:20:17.990Z
}
*/

