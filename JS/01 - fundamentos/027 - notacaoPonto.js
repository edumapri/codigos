console.log(Math.ceil(8.1)) // Saída: 9

const obj1 = {}
obj1.nome = "Bola";
// obj1["nome"] = "Bola2";
console.log(obj1.nome); // Saída: Bola

function Obj(nome){
    this.nome = nome;
    this.exec = function() {
        console.log("Exec...");
    }
}

const obj2 = new Obj("Cadeira");
const obj3 = new Obj("Mesa");
console.log(obj2.nome);// O atributo "nome" vem da function Obj por conta do "this.nome"
console.log(obj3.nome); // Saída: Mesa
obj3.exec(); // Saída: Exec...