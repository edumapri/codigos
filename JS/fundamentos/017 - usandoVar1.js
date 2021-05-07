{
    {
        {
            {
                var sera = "Será???";
                console.log(sera); // Será???
            }
        }
    }
}

console.log(sera);// Saída: Será???

function teste() {
    var local = 123;
    console.log(local);
}

teste();// Saída: 123 
console.log(local);// Saída: ReferenceError: local is not defined.....
