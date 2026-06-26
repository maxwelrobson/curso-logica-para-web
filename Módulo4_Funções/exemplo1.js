const prompt = require('prompt-sync')();

console.log("Analisador de Idades!")

let ano = 2025
let opcao

function calculoIdade(nome, anoNascimento) {
     console.log(nome+ " tem "+ (ano - anoNascimento) + " anos.")
 }
    
    do {
        let nome = prompt("Digite o nome: ")
        let anoNascimento = prompt("Digite o ano de nascimento: ")
        calculoIdade(nome, anoNascimento)
        console.log("Deseja verificar outra idade?")
        opcao = +prompt("1 - para sim ou 2 para não: ")
    } while (opcao === 1);

    


