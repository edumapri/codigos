function Pessoa(nome) {
    this.nome = nome;

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa("João");
p1.falar();// Saída: Meu nome é João
console.log(p1.nome);// Saída: João