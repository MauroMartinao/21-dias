let nome = []
let senha = []
let contador = 0
let continuar = true

while (continuar) {
    let opcao = prompt("1 - cadastro ? / 2 - login / 3 - excluir / 4 - encerrar")
    
    switch (opcao) {
        case "1":
            nome[contador] = prompt("qual o nome?")
            senha[contador] = prompt("qual a senha")
            contador++            
            break;

        case "2":
            let nomeLogin = prompt("qual o nome?")
            let senhaLogin = prompt("qual a senha?")
            let loginvalido = false
        
            for (let i = 0; i < contador; i++) {
                if (nomeLogin == nome[i] && senhaLogin == senha[i]) {
                    loginvalido = true
                }
            }
        
            if (loginvalido) {
                alert("login feito com sucesso. Bem-vindo!")
            } else {
                alert("login ou senha invalido")
            }    
            break;
    
        case "3":
            let nomeExcluir = prompt("qual o nome que deseja excluir")
            let nomeAux = []
            let senhaAux = []
            let contadorAux = 0

            for (let i = 0; i < contador; i++) {
                if (nomeExcluir != nome[i]) {
                    nomeAux[contadorAux] = nome[i]
                    senhaAux[contadorAux] = senha[i]
                    contadorAux++
                }
            }

            nome = nomeAux
            senha = senhaAux
            contador--
            alert("cadastro excluído com sucesso")
            break;

        case "4":
            continuar = false
            break;
        default:
            console.log("opcao invalida, escolha outra!")
            break;
    }
}
