const pessoa = {
    saudacao: "Bom dia",
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar()// Saída: Bom dia

const falar = pessoa.falar;
falar();// Saída: undefined conflito entre os paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();// Saída: Bom dia

