
/*
Um funcionário de uma empresa recebe,
anualmente, aumento salarial. Sabe-se que: a)
esse funcionario foi contratado em 2018, com
salário inicial de R$2.000,00; b) Em 2019, ele
recebeu aumento de 1,5%, sobre o seu salário
inicial; c) A partir de 2020 (inclusive), os
aumentos salariais sempre corresponderam ao
dobro do percentual do ano anterior. Faça um
programa que determine o salário desse
funcionário no ano de 2023.
Apresente todos os valores.
*/


var salarioInicial = 2000
var ano = 2018
var percentual = 1.5

    console.log("O salário de "+ano+" é: "+salarioInicial.toFixed(2)+" (Salário base)")
    ano++
    var salarioAumento = salarioInicial * (1 + percentual / 100)
    console.log("O salário de "+ano+" é: "+salarioAumento.toFixed(2) + " (+" + percentual +"% sobre o inicial)")

ano++

for (ano; ano <= 2023; ano++) {
    percentual *= 2
    salarioAumento = salarioAumento * (1 + percentual / 100)
    var anoCompara = ano - 1
    console.log("O salário de "+ano+ " é: "+salarioAumento.toFixed(2) + " (+" + percentual.toFixed(1) +"% sobre o valor de "+anoCompara+")")
}


    

