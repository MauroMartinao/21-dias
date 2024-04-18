//  let arrayA = [13, 20, 10, 22, 24, 20, 27, 17, 19, 14]
//  let arrayB = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21]
//  
//  function ArrayX(arrayUm, arrayDois) {
//      
//      let resultado = []
//      let contadorResultado = 0
//      
//      for (let i = 0 ; i < arrayUm.length ; i++){
//  
//          for (let j = 0 ; j < arrayDois.length ; j++){
//  
//              if(arrayUm[i] == arrayDois[j]) {
//                  resultado [contadorResultado] = arrayUm[i]
//                  contadorResultado++
//                  j = arrayDois.length
//              }
//          }
//      }
//      
//      return resultado
//  }
//  
//  console.log(ArrayX(arrayA, arrayB))



let listaMauro = ["areia", "pedra", "cimento", "prego", "tabua"]
let listaPaulo = ["pedrisco", "cal", "vedalit", "pedra", "prego", "cimento"]

function MateriaisRepetidos(pedidoMauro, pedidoPaulo){

    let conferir = []
    let contadorResultado

    for(let i = 0 ; i < pedidoMauro.length ; i++) {

        for(let j = 0 ; j < pedidoPaulo.length ; j++) {

            if(pedidoMauro[i] == pedidoPaulo[j]) {
                conferir [contadorResultado] = pedidoMauro[i]
                contadorResultado++
                j = listaPaulo.length
            }
        }
    }

    return conferir
}
console.log(MateriaisRepetidos(listaMauro, listaPaulo))