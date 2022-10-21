// Metodo  Find
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
console.log (
    cachorro.find((procuraNome) => {
        return procuraNome.id == 2;
    })
)