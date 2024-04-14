//  class Aluno {
//      nomei
//      constructor(nome, idade, sexo) {
//          this.nome = nome
//          this.idade = idade
//          this.sexo = sexo
//      }
//  }
//  
//  console.log("======CADASTRO DE ALUNOS======")
//  let alunos = [];
//  let continuar = true;
//  let indexDoAluno = 0; 
//  
//  while (continuar) {
//      let nome = prompt("insira o nome")
//      let idade = prompt("insira a idade")
//      let sexo = prompt("insira o sexo")
//      let aluno = new Aluno(nome, idade, sexo)
//  
//      alunos[indexDoAluno] = aluno
//      let desejaContinuar = prompt("Insira 1 para cadastrar novo aluno")
//      if (desejaContinuar != "1") {
//          continuar = false;
//      } else {
//          indexDoAluno++
//      }
//  }// 

// EXERCICIO 2

//  class Computador {
//     tipo
//     processador
//     video
//     armazenamento
//     memoriaRam
//     SSD// 

//     constructor(tipo, processador, video, armazenamento, memoriaRam, SSD){
//         this.tipo = tipo;
//         this.processador = processador;
//         this.video = video;
//         this.armazenamento = armazenamento;
//         this.memoriaRam = memoriaRam;
//         this.SSD = SSD;
//     }   
// }// 

// console.log("=====MEU SETUP=====")// 

// let pcs = []
// let continuar = true
// let indexDoPc = 0// 

// while (continuar) {
//     let tipo = prompt("Qual o seu tipo de computador?")
//     let processador = prompt("Qual o seu processador?")
//     let video = prompt("Qual a placa de video?")
//     let armazenamento = prompt("Qual o tipo de memoria de armazenamento?")
//     let memoriaRam = prompt("Quanto de memoria RAM?")
//     let SSD = prompt("Quanto de SSD?")// 

//     let pc = new Computador(tipo, processador, video, armazenamento, memoriaRam, SSD)
// pcs[indexDoPc] = pc;// 

//     let outroCadastro = prompt("Cadastrar outro SETUP?")
//     if (outroCadastro != "1") {
//         continuar = false;
//     }else{
//         indexDoPc++
//     }
// }



// class Car{
//     name 
//     power
//     maxSpeed
//     acceleration
// 
//     constructor(name, power, maxSpeed, acceleration){
//     this.name = name
//     this.power = power
//     this.maxSpeed = maxSpeed
//     this.acceleration = acceleration
//     }
// 
//     CalcularTempoMedio(distancia) {
//         let resultado = distancia/(this.maxSpeed / this.acceleration)
//         return resultado
//     }
// }
// 

// EXERCICIO 3
class Corrida {
    constructor(nome, tipo, distancia, participantes, vencedor){
        this.nome = nome;
        this.tipo = tipo;
        this.distancia = distancia;
        this.participantes = participantes;
        this.vencedor = vencedor; 
    }

    DefinirVencedor(){
        let menorTempo = this.participantes[0].CalcularTempoMedio(this.distancia);
        let vencedor = this.participantes[0];

        for (let index = 1 ; index < this.participantes.length ; index++) {
            let tempo = this.participantes[index].CalcularTempoMedio(this.distancia);
            if (tempo < menorTempo) { 
                menorTempo = tempo; 
                vencedor = this.participantes[index]; 
            }
        }

        return this.vencedor = vencedor; 
    }

    ExibirVencedor(){
        alert("O vencedor é " + this.vencedor.nome); 
    }
}

let corrida = new Corrida("Monza", "Formula 1", 60000, [], null); 

corrida.participantes = [];
corrida.participantes[0] = new Carro("kicks", 120, 160, 5);
corrida.participantes[1] = new Carro("marea", 210, 200, 9); 
corrida.participantes[2] = new Carro("peugeot 206", 300, 220, 10); 

corrida.DefinirVencedor();
corrida.ExibirVencedor();