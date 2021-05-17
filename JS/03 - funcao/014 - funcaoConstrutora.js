function Carro(velocidadeMaxima = 200, delta = 5){
    // atributo privado
    let velocidadeAtual = 0;

    // método publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    // método publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    }
}

const uno = new Carro ();
uno.acelerar();
console.log(uno.getVelocidadeAtual());// Saída: 5

const ferrari = new Carro (350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());// Saída: 60

console.log(typeof Carro);// Saída: function
console.log(typeof uno);// Saída: object
console.log(typeof ferrari);// Saída: object



