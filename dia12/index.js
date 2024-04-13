 class Aluno {
     nomei
     constructor(nome, idade, sexo) {
         this.nome = nome
         this.idade = idade
         this.sexo = sexo
     }
 }
 
 console.log("======CADASTRO DE ALUNOS======")
 let alunos = [];
 let continuar = true;
 let indexDoAluno = 0; 
 
 while (continuar) {
     let nome = prompt("insira o nome")
     let idade = prompt("insira a idade")
     let sexo = prompt("insira o sexo")
     let aluno = new Aluno(nome, idade, sexo)
 
     alunos[indexDoAluno] = aluno
     let desejaContinuar = prompt("Insira 1 para cadastrar novo aluno")
     if (desejaContinuar != "1") {
         continuar = false;
     } else {
         indexDoAluno++
     }
 }

 class Computador {
    tipo
    processador
    video
    armazenamento
    memoriaRam
    SSD

    constructor(tipo, processador, video, armazenamento, memoriaRam, SSD){
        this.tipo = tipo;
        this.processador = processador;
        this.video = video;
        this.armazenamento = armazenamento;
        this.memoriaRam = memoriaRam;
        this.SSD = SSD;
    }   
}

console.log("=====MEU SETUP=====")

let pcs = []
let continuar = true
let indexDoPc = 0

while (continuar) {
    let tipo = prompt("Qual o seu tipo de computador?")
    let processador = prompt("Qual o seu processador?")
    let video = prompt("Qual a placa de video?")
    let armazenamento = prompt("Qual o tipo de memoria de armazenamento?")
    let memoriaRam = prompt("Quanto de memoria RAM?")
    let SSD = prompt("Quanto de SSD?")

    let pc = new Computador(tipo, processador, video, armazenamento, memoriaRam, SSD)
pcs[indexDoPc] = pc;

    let outroCadastro = prompt("Cadastrar outro SETUP?")
    if (outroCadastro != "1") {
        continuar = false;
    }else{
        indexDoPc++
    }
}