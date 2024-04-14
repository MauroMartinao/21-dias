let nome
let salario

function infos() {
    nome = prompt("Qual o seu nome?")
    salario = parseFloat(prompt("Qual o seu salario?"))
    calcularAumentoSalario(nome, salario)
}

function calcularAumentoSalario(nome, salario) {
    let aumento = 0

    if (salario <= 1500) {
        aumento = 0.2;        
    } else if (salario <= 2000) {
        aumento = 0.15;
    } else if (salario <= 3000) {
        aumento = 0.1;
    } else {
        aumento = 0.05;
    }


let novoSalario = salario + (salario * aumento);

console.log(("nome do colaborador: ") + nome);
console.log(("salario: R$") + salario);
console.log(("aumento: ") + (aumento * 100) + "&");
console.log("salario reajustado: R$" + novoSalario);

perguntarNovamente()
}

function perguntarNovamente() {
    let resposta = prompt("deseja calcular novamente? (sim/nao)")

    if (resposta == "sim") {
        infos()
    } else {
        console.log("programa encerrado.")
    }
}