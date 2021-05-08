function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = { max: 50, min: 40}
console.log(rand(obj));// Saída: 50
console.log(rand({min: 955}));// Saída: 1000
console.log(rand({}));// Saída: 1000
console.log(rand());/* Saída:
t:\CURSANDO\JS\fundamentos\031 - desctruturing3.js:1
function rand({ min = 0, max = 1000}) {
                ^

TypeError: Cannot read property 'min' of undefined
    at rand (t:\CURSANDO\JS\fundamentos\031 - desctruturing3.js:1:17)
    at Object.<anonymous> (t:\CURSANDO\JS\fundamentos\031 - desctruturing3.js:10:13)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
*/

