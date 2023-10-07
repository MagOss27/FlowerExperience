/*let btn = document.querySelector('#verSenha') //pegou a classe do olho para fazer a modificação
let btnConfirm = document.querySelector('#verConfirmSenha') //pegou a classe do olho para fazer a modificação

let nome = document.querySelector('#nome') //querySelector chama os inputs para a validação
let labelNome = document.querySelector('#labelNome')
let validNome = false  //variavel buleana que começa com falso para a validação

let email = document.querySelector('#email')  //querySelector chama os inputs para a validação
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false  //variavel buleana que começa com falso para a validação

let senha = document.querySelector('#senha') //querySelector chama os inputs para a validação
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false  //variavel buleana que começa com falso para a validação

let confirmSenha = document.querySelector('#confirmSenha')  //querySelector chama os inputs para a validação
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false  //variavel buleana que começa com falso para a validação

let msgError = document.querySelector('#msgError')  //mensagem de erro, cadastro não concluido
let msgSuccess = document.querySelector('#msgSuccess') //mensagem de sucesso, cadastro concluido

nome.addEventListener('keyup', () => {  //Criando Evento de Keyup, que quando levanta o dedo da tecla ele começa a executar o que esta dentro

    if (nome.value.length <= 2) { //Minimo de 3 caracteres no Nome

        labelNome.setAttribute('style', 'color: red') //setAttribute modifica o valor de um atributo existente em um elemento 
        //cor vermelha caso esteja certo o if

        labelNome.innerHTML = '<strong>Nome *Insira no Mínimo 3 caracteres</strong>' //coloca uma mensagem do lado do Nome, alertando
        nome.setAttribute('style', 'border-color: red') //borda vermelha nesta escrita
        validNome = false //validação está falsa

    } else { //senão

        labelNome.setAttribute('style', 'color: green') //cor verde caso esteja seja else
        labelNome.innerHTML = 'Nome' //innerHTML faz a função do Html só que no JS
        nome.setAttribute('style', 'border-color: green')
        validNome = true  //validação está verdadeira

    }

})

email.addEventListener('keyup', () => {  //Criando Evento de Keyup, que quando levanta o dedo da tecla ele começa a executar o que esta dentro

    if (email.value.length <= 9) { //Minimo de 5 caracteres no email

        labelEmail.setAttribute('style', 'color: red') //setAttribute modifica o valor de um atributo existente em um elemento 
        //cor vermelha caso esteja certo o if

        labelEmail.innerHTML = 'Insira no Mínimo 10 caracteres' //coloca uma mensagem do lado do email, alertando
        email.setAttribute('style', 'border-color: red') //borda vermelha nesta escrita
        validEmail = false //validação está falsa

    } else { //senão

        labelEmail.setAttribute('style', 'color: green') //cor verde caso esteja seja else
        labelEmail.innerHTML = 'Email' //innerHTML faz a função do Html só que no JS
        email.setAttribute('style', 'border-color: green')
        validEmail = true  //validação está verdadeira

    }

})

senha.addEventListener('keyup', () => {  //Criando Evento de Keyup, que quando levanta o dedo da tecla ele começa a executar o que esta dentro

    if (senha.value.length <= 7) { //Minimo de 6 caracteres na Senha

        labelSenha.setAttribute('style', 'color: red') //setAttribute modifica o valor de um atributo existente em um elemento 
        //cor vermelha caso esteja certo o if

        labelSenha.innerHTML = 'Use 8 caracteres ou mais para sua senha' //coloca uma mensagem do lado da Senha, alertando
        senha.setAttribute('style', 'border-color: red') //borda vermelha nesta escrita
        validSenha = false //validação está falsa

    } else { //senão

        labelSenha.setAttribute('style', 'color: green') //cor verde caso esteja seja else
        labelSenha.innerHTML = 'Senha' //innerHTML faz a função do Html só que no JS
        senha.setAttribute('style', 'border-color: green')
        validSenha = true //validação está verdadeira
    }

})

confirmSenha.addEventListener('keyup', () => {  //Criando Evento de Keyup, que quando levanta o dedo da tecla ele começa a executar o que esta dentro

    if (senha.value != confirmSenha.value) { //Minimo de 6 caracteres na Senha

        labelConfirmSenha.setAttribute('style', 'color: red') //setAttribute modifica o valor de um atributo existente em um elemento 
        //cor vermelha caso esteja certo o if

        labelConfirmSenha.innerHTML = 'Confirmar a sua Senha' //coloca uma mensagem do lado da Senha, alertando
        confirmSenha.setAttribute('style', 'border-color: red') //borda vermelha nesta escrita
        validConfirmSenha = false //validação está falsa

    } else { //senão

        labelConfirmSenha.setAttribute('style', 'color: green') //cor verde caso esteja seja else
        labelConfirmSenha.innerHTML = 'Confirmar a sua Senha' //innerHTML faz a função do Html só que no JS
        confirmSenha.setAttribute('style', 'border-color: green')
        validConfirmSenha = true //validação está verdadeira

    }

})

function cadastrar() { //uma das formas de fazer a validação


    if (validNome && validEmail && validSenha && validConfirmSenha) {  //validação do cadastro

        //quando todos os itens acima forem corretos irá salvar no localStorage
        //criando Banco de Dados com JSON E localStorage
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]') //pegar lista já com algo dentro, ou cria algo dentro do localStorage
        //getItem pega os itens

        listaUser.push({ //objeto do email, push pega os itens dentro do objeto
            
            userCadastrado: nome.value,
            emailCadastrado: email.value,
            senhaCadastrado: senha.value

        })

        localStorage.setItem('listaUser', JSON.stringify(listaUser)) //salvando dados do email com setItem/salva itens 



        msgSuccess.setAttribute('style', 'display:block')
        msgSuccess.innerHTML = 'Cadastrando...'
        msgError.setAttribute('style', 'display:none')
        msgError.innerHTML = ''

        //cria um delay nesta função abaixo, ou seja faz com que esta função atrasse o seu processo
        setTimeout(() => {

            window.location.href = 'principallogado.html' //localização da pagina de login
            //comando para salvar os dados dentro da pagina

        }, 1000) //tempo do delay


    } else {

        msgError.setAttribute('style', 'display:block')
        msgError.innerHTML = 'Preencha todos os campos'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display:none')
    }

}

btn.addEventListener('click', () => { //esta fazendo um efeito de ao clicar ele faz está função
    let inputSenha = document.querySelector('#senha') //pegar o input de senha

    if (inputSenha.getAttribute('type') == 'password') { //se o atributo dele for igual ao password, ou seja type=senha
        inputSenha.setAttribute('type', 'text') //set é para pegar a senha. Trocar o type para text

    } else { //senão

        inputSenha.setAttribute('type', 'password') //ao contrário, transforme texto em type

    }

})

btnConfirm.addEventListener('click', () => { //esta fazendo um efeito de ao clicar ele faz está função
    let inputConfirmSenha = document.querySelector('#confirmSenha') //pegar o input de senha

    if (inputConfirmSenha.getAttribute('type') == 'password') { //se o atributo dele for igual ao password, ou seja type= Confirme a senha
        inputConfirmSenha.setAttribute('type', 'text') //set é para pegar a confirmação de senha. Trocar o type para text

    } else { //senão

        inputConfirmSenha.setAttribute('type', 'password') //ao contrário, transforme texto em type
    }

})/**/

// let nomeCadastro = document.getElementById("nome")
// let emailCadastro = document.getElementById("email")
// let senhaCadastro = document.getElementById("senha")
// let confSenhaCadastro = document.getElementById("confirmSenha")

// let vetorCadastro = []

// function cadastrar() {

//     let objetoUsuarios = {

//         nomeUsuario: '',
//         emailUsuario: '',
//         senhaUsuario: '',

//     }

//     objetoUsuarios.nomeUsuario = nomeCadastro.value
//     objetoUsuarios.emailUsuario = emailCadastro.value
//     objetoUsuarios.senhaUsuario = senhaCadastro.value

//     vetorCadastro = JSON.parse(localStorage.getItem('objetoUsuarios'))

//     if(vetorCadastro == null){ 

//         vetorCadastro = []

//     }

//     if (nomeCadastro.value != '') {

//         vetorCadastro.push(objetoUsuarios)
//         localStorage.setItem('objetoUsuarios', JSON.stringify(vetorCadastro))

//         window.location.href = "login.html"

//     } else {

//         alert('Preencha os campos corretamente para efetuar o cadastro.')

//     }

// }