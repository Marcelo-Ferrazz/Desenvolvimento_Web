// metodo map ()
const numeros = [2, 7, 8, 50, 34]
const newNumber = numeros.map(Math.sqrt)
console.log(newNumber)

// metodo map () com Array de objetos ultilizando arrow function
console.clear()
const cachorro = [
    {
        id:0,
        nome:"bololinho",
        idade:11,
    },
    {
        id:1,
        nome:"Toby",
        idade:7,
    },
    {
        id:2,
        nome:"Pingo",
        idade:6,
    }
]

const mapDog = cachorro.map((nomeDog) => {
    return nomeDog.idade;
})

console.log(mapDog)
console.log(cachorro)