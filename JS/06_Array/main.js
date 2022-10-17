// Criando Array unidimensional //
var array1 = ["Marcelo", 15, "Colin", 47, true]
console.log (array1);
console.log (array1[2]);
console.clear()
array1[3] = 80;
console.log (array1);

// Array bidimensional //
var array2 = [
    ["Pipoca", 10, false],
    ["String", 20, true],
    ["Margarina", 12, false]
]

console.log(array2);
console.log(array2[2][0]);
console.clear()
array2[1][0] = "salsicha";
console.log(array2);

// Array de objeto Carro transform em string //
console.clear()
var carro = ["Uno", 1998, "0Km", false, 2];
var x = carro.toString();
console.log(typeof x);
console.log(typeof carro);

// metodo de separação do seu array //
console.clear()
var y = carro.join(" ¬ ")
console.log(carro);
console.log(x);
console.log(y);

// motra o tamanho do seu array //
console.clear()
console.log(carro.length);

// remove o ultimo elemento do array //
console.clear()
var t = carro.pop();
console.log(carro);

// adiciona um novo elemento ao final do array //
console.clear()
var u = carro.push("lego");
console.log(carro);

// remove o primeiro elemento do array //
console.clear()
var p = carro.shift();
console.log(carro);

// adiciona um novo elemento no inicio do array //
console.clear()
var w = carro.unshift("Argo");
console.log(carro);

// Apagando um elemento em uma posição específica //
console.clear()
delete carro[1];
console.log(carro);
