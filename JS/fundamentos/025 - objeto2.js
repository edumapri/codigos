console.log(typeof Object);// Saída: function
console.log(typeof new Object);// Saída: object

const Cliente = function() {}
console.log(typeof Cliente);// Saída: function
console.log(typeof new Cliente);// Saída: object

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto);// Saída: function
console.log(typeof new Produto());// Saída: object

