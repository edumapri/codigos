let dobro = function (a) {
    return 2 * a;
}

dobro = (a) => {
    return 2 * a;
}

dobro = a => 2 * a  // return implícito
console.log(dobro(Math.PI));// Saída: 6.283185307179586

let ola = function() {
    return "Olá";
}

ola = () => "Olá";
ola = _ => "Olá";// Possui um parametro
console.log(ola());// Saída: Olá
