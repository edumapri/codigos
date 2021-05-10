function soBoaNoticia(nota){
    if(nota >= 7){
        console.log("Aprovado com " + nota);
    }
}

soBoaNoticia(8.1);// Sáida: Aprovado com 8.1
soBoaNoticia(6.1);// Sáida: Sem saída por não atender a estrutura if

function seForVerdadeEuFalo(valor) {
    if(valor){
        console.log("É verdade... " + valor);
    }
}

seForVerdadeEuFalo();// Sáida: Sem saída por não atender a estrutura if
seForVerdadeEuFalo(null);// Sáida: Sem saída por não atender a estrutura if
seForVerdadeEuFalo(undefined);// Sáida: Sem saída por não atender a estrutura if
seForVerdadeEuFalo(NaN);// Sáida: Sem saída por não atender a estrutura if
seForVerdadeEuFalo('');// Sáida: Sem saída por não atender a estrutura if
seForVerdadeEuFalo(0);// Sáida: Sem saída por não atender a estrutura if
seForVerdadeEuFalo(-1);// Sáida: É verdade... -1
seForVerdadeEuFalo(' ');// Sáida: É verdade...
seForVerdadeEuFalo('?');// Sáida: É verdade... ?
seForVerdadeEuFalo([]);// Sáida: É verdade...
seForVerdadeEuFalo([1, 2]);// Sáida: É verdade... 1,2
seForVerdadeEuFalo({});// Sáida: É verdade... [object Object]