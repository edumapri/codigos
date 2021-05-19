// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis esternas

// Contexto léxico em ação!

const x = "Blobal";

function fora () {
    const x = "local";
    function dentro () {
        return x;
    }
    return dentro;
}

const minhaFuncao = fora ();
console.log(minhaFuncao ());// Saída: local

