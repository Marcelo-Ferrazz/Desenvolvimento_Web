// Metodo  ForEach
var frutas = ["Banana", "maca", "Kiwi", "Melancia"]

// Metodo ForEach é ultilizado para percorrer um array e aplicar alguma mudaça ou configuraçoes 

frutas.forEach(minhaFuncao)

function minhaFuncao( valor, indice ){
    console.log(`o valor é ${valor}`)
    console.log(`o indice é ${indice}`)
}

// Metodo ForEach() com Array de objetos ultilizando arrow function
console.clear()
const alunos = [
    {
        id:0,
        nome:"Marcelo",
        passou:true,
    },
    {
        id:1,
        nome:"Agatha",
        passou:false,
    },
    {
        id:2,
        nome:"Vitor",
        passou:false,
    }
]

alunos.forEach((aprovados) => console.log(aprovados.passou))