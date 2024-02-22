let nome = prompt("Qual o seu nome ?")
let idade = prompt("Qual a sua idade ?")
let peso = prompt("Qual a seu peso ?")
let altura = prompt("Qual a sua altura ?")
let profissao = prompt("Qual a sua profissao ?")
let imc = peso/(altura * altura)
console.log("Usuario inseriu: nome: " + nome +", idade: " + idade +", peso: " + peso + "kg, profissao: "
+ profissao + ", e tem " + altura +"m de altura")

if (idade >= 18) {
    console.log("Esta liberado para tomar umas geladas")
} else {
    console.log("Sem gelada para voce")
}


let dias = idade * 365
let mes = dias / 30
let semanas = dias / 7
    console.log("entao voce viveu:\n" + dias + " dias\n" + mes + " meses\n" + semanas.toFixed(2) + " semanas" )

if (imc < 18.5) {
    console.log("Magreza");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Normal");
} else if (imc > 24.9 && imc <= 30) {
    console.log("Sobrepeso");
} else if (imc > 30) {
    console.log("Obesidade");
} else {
    console.log("IMC inválido");
}

let anoAtual = 2024
let anoNasc = anoAtual - idade
console.log("Voce nasceu no ano de " + anoNasc)
 
let anoVivido = anoNasc
let idadeAtual = 0

for (let anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++) {
    console.log(anoVivido + " - " + idadeAtual + " anos de idade")
    idadeAtual++
}

