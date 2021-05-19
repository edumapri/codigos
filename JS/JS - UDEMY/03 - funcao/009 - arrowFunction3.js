let comparaComThis = function (param) {
    console.log( this === param); 
}

comparaComThis(global);// Saída: true

const obj = {}
comparaComThis = comparaComThis.bind(obj);
comparaComThis (global);// Saída: false
comparaComThis (obj);// Saída: true

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);// Saída: false
comparaComThisArrow(module.exports);// Saída: true 

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);// Saída: false
comparaComThisArrow(module.exports);// Saída: true 

