// Criação de classe carro
class carro {
    constructor(nome, ano, portas, janelas){
        this.nome = nome;
        this.ano = ano;
        this.portas = portas;
        this.janelas = janelas;
    }
    //Metodo que retorna a idade do meu carro
    idadeCarro(anoAtual){
        return anoAtual - this.ano;
    }
}


// Criação de objeto que herda a caracteristica da classe carro 
var carro1 = new carro("celta" , 2002, 2, 4)
var carro2 = new carro("veloster" , 2016, 3, 4)


//apresenta os objetos no console.log
console.log(carro1)
console.log(carro1.nome)


//pega o ano atual
var dataHoje = new Date();
var ano = dataHoje.getFullYear();


//retorna a idade do objeto carro1
console.log("meu carro atualmente tem",carro1.idadeCarro(ano),"anos")