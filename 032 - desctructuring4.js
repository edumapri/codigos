function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([50, 40]));//Saída: 47
console.log(rand([992]));//Saída: 993
console.log(rand([, 10]));//Saída: 9
console.log(rand([]));//Saída: 7
console.log(rand());/* Saída:
t:\CURSANDO\032 - desctruturing4.js:1
function rand([min = 0, max = 1000]){
             ^

TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))
    at rand (t:\CURSANDO\032 - desctruturing4.js:1:14)
    at Object.<anonymous> (t:\CURSANDO\032 - desctruturing4.js:11:13)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47

*/