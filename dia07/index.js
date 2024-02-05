// --------------------
let cond = true
while (cond) {
   let idade = Number(prompt("Qual a sua idade?"))
   if (idade >= 18) {
       console.log("Você é maior de idade.")
       cond = false
   } else {
       console.log("Você é menor de idade.")
   }
}

// --------------------
let idade = 17

do {
    let idade = Number(prompt("Qual a sua idade?"))
    console.log(idade)
} while (idade >= 18);

console.log("voce é menor de idade")

//Quiz 1
let mediaGeral = 0
let nHomens = 0
let nMulheresA7 = 0
let maiorNotaHomens = 0
let contador = 1

while (contador <= 10) {
    nota = parseInt(prompt("Digite a nota do " + contador + "o aluno"))
    sexo = prompt("digite o sexo do aluno (m/f)")

    if (sexo == "m") {
        if (nota > maiorNotaHomens) {
            maiorNotaHomens = nota
        }
        nHomens++
    }
    
    if (sexo == "f" && nota < 7) {
        nMulheresA7++
    }

    mediaGeral += nota
    contador++
}

mediaGeral = mediaGeral / 10

console.log("A media geral dos alunos foi: " + mediaGeral)
console.log("A quantidade de homens cadastrados foi: " + nHomens)
console.log("A quantidade de mulheres que tiveram a nota acima de 7 foi: " + nMulheresA7)
console.log("A maior nota entre os homens foi: " + maiorNotaHomens)
