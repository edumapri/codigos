// par nome/valor
const saudacao = "Opa" // contexto léxico 1

function exec(){
    const saudacao = "Falaaaa"; // contexto léxico 2
    return saudacao;
}

// Objetos são grupos de pares nome/valor
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua Muito Legal",
        numero: 123
    }
}

console.log(saudacao); // Saída: Opa
console.log(exec()); // Saída: Falaaaa
console.log(cliente); /*
{
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: { logradouro: 'Rua Muito Legal', numero: 123 }
}

*/