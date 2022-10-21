// Metodo filter  percorre o array e retorna as informações que passam no filtro
const idade = [5, 9, 10, 15, 25, 35, 45, 89]
// percorre array e retorna apenas as idades a baixo de 30
let filtraIdade = idade.filter((idade) => {
    return idade < 30
})
console.log(filtraIdade)