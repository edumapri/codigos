// Declaramos duas variáveis
var programador = "Eduardo";
var pontuacao = 10;

console.log(programador); // Imprime Eduardo
console.log(pontuacao); // Imprime 10



// Outros exemplos de declaração de variáveis
var nome = "William";
console.log(nome);

var idade = 32;
console.log(idade + "anos");

var valor = 25.99;
var desconto = 5;
var precoFinal = valor - desconto;
console.log("Valor final = " + precoFinal);



// Exemplos de tipos de variáveis
var valor = 5; //tipo number
var preco = 29.98; // tipo number

var sobrenome = 'Silva'; //tipo string
var texto = 'Hello World'; // tipo string
var nome = "Pedro"; // tipo string
var idade = "50 anos"; // tipo string
var titulo = "Bem-vindo."; // tipo string

var ligado = true; // tipo boolean
var ativado = false; // tipo boolean



// Podemos declarar um array da seguinte forma:
var estados = ["Rio de Janeiro", "São Paulo", "Bahia"];
console.log(estados); // vai imprimir: (3) ["Rio de Janeiro", "São Paulo", "Bahia"]


// valor da variável na posição 0 do array,
var estados = ["Rio de Janeiro", "São Paulo", "Bahia"];
console.log(estados[0]); // Vai imprimir o texto "Rio de Janeiro"

// Outro exemplo, que agora imprimirá "São Paulo"
var estados = ["Rio de Janeiro", "São Paulo", "Bahia"];
console.log(estados[1]);

// Outros exemplos:
var linguagens = ["JavaScript", "PHP", "JAVA", "C#"];

console.log(linguagens[0]); //resultado impresso: JavaScript
console.log(linguagens[3]); //resultado impresso: C#



// Alterando um valor do array
var linguagens = ["JavaScript", "PHP", "JAVA", "C#"];
var linguagem = "C";
linguagens[2] = linguagem;
// ou
linguagens[2] = "C";



// Armazenando telefones
var telefones = [
  '(11) 98899 - 8787',
  '(22) 3455 - 8819',
  '(91) 95620 - 0000'
];



// Armazenar os meses do ano para uma consulta:
var meses= [ 'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

// Armazenar as redes sociais que um usuário possui:
var redesSociais= ['Facebook', 'Twitter', 'Linkedin', 'Instagram'];

// Armazenar os itens de um menu:
var menu =[' Todas', 'Vídeos', 'Notícias', 'Maps'];



// Tipo undefined
var nome;
console.log(nome); //vai imprimir undefined

// Gerando um erro com o tipo undefined
console.log(nome.length);
// TypeError: Cannot read property 'length' of undefined



// Tipo NaN
var idade;
console.log( idade + 1 ); // vai imprimir NaN


// Tipo Null
var nome  = null;
console.log(nome); // vai imprimir null

// Gerando um erro com o tipo null
var nome = null;
console.log(nome.length);
// TypeError: Cannot read property 'length' of null
var preco = null;
console.log(preco.toFixed(2));
// TypeError: Cannot read property 'toFixed' of null

// Somando à um valor null
var idade = null;
console.log( idade + 1 ); // vai imprimir 1


// Uma constante é declarada dessa forma
const url = "https://www.devmedia.com.br/";