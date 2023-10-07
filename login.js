// let btn = document.querySelector('.fa-eye') //pegou a classe do olho para fazer a modificação

// btn.addEventListener('click', () => { //esta fazendo um efeito de ao clicar ele faz está função
//     let inputSenha = document.querySelector('#senha') //pegar o input de senha

//     if (inputSenha.getAttribute('type') == 'password') { //se o atributo dele for igual ao password, ou seja type=senha
//         inputSenha.setAttribute('type', 'text') //set é para pegar a senha. Trocar o type para text

//     } else { //senão

//         inputSenha.setAttribute('type', 'password') //ao contrário, transforme texto em type
//     }

// })



/////////// CADASTRO \\\\\\\\\\\\  

let nomeCadastro = document.getElementById("nomecadastrar")
let emailCadastro = document.getElementById("emailcadastrar")
let senhaCadastro = document.getElementById("senhacadastrar")
let confSenhaCadastro = document.getElementById("confirmSenha")

let emailLogin = document.getElementById("nome")
let senhaLogin = document.getElementById("senha")

let editarNome = document.getElementById("editNome")
let editarEmail = document.getElementById("editEmail")
let editarSenha = document.getElementById("editSenha")

let excluirEmail = document.getElementById("exEmail")
let excluirSenha = document.getElementById("exSenha")

let emailPerfil = document.getElementById("usuarioEmail")
let senhaPerfil = document.getElementById("usuarioSenha")

let adicionarProduto = document.getElementById("addProduto")
let adicionarValorProduto = document.getElementById("addValorProduto")

let pesquisaUsuario = document.getElementById("pesqUsuario")
let pesquisaProduto = document.getElementById("pesqProduto")

let editarProduto = document.getElementById("editProduto")
let editarValorProduto = document.getElementById("editValorProduto")

let excluirProduto = document.getElementById("exProduto")

let usuarioLogado = false

let vetorCadastro = JSON.parse(localStorage.getItem('objetoUsuarios'))

let vetorCadastroProdutos = []

if (vetorCadastro == null) {

    vetorCadastro = []

    let objetoAdm = [{

        nomeUsuario: 'administrador',
        emailUsuario: 'adm',
        senhaUsuario: 'admin',
        onlineUsuario: false,

    }]

    localStorage.setItem('objetoUsuarios', JSON.stringify(objetoAdm))

}


function cadastrar() {


    let objetoUsuarios = {

        nomeUsuario: '',
        emailUsuario: '',
        senhaUsuario: '',
        onlineUsuario: false,

    }

    objetoUsuarios.nomeUsuario = nomeCadastro.value
    objetoUsuarios.emailUsuario = emailCadastro.value
    objetoUsuarios.senhaUsuario = senhaCadastro.value

    vetorCadastro = JSON.parse(localStorage.getItem('objetoUsuarios'))

    if (vetorCadastro == null) {

        vetorCadastro = []

    }

    if (nomeCadastro.value != '') {

        vetorCadastro.push(objetoUsuarios)
        localStorage.setItem('objetoUsuarios', JSON.stringify(vetorCadastro))

        window.location.href = "login.html"

    } else {

        alert('Preencha os campos corretamente para efetuar o cadastro.')

    }

}

/////////// LOGIN \\\\\\\\\\\


function entrar() {


    for (i = 0; i < vetorCadastro.length; i++) {

        vetorCadastro[i].onlineUsuario = false

    }

    localStorage.setItem('objetoUsuarios', JSON.stringify(vetorCadastro))

    vetorCadastro = JSON.parse(localStorage.getItem('objetoUsuarios'))

    for (i = 0; i < vetorCadastro.length; i++) {



        if (emailLogin.value == vetorCadastro[i].emailUsuario && senhaLogin.value == vetorCadastro[i].senhaUsuario) {

            vetorCadastro[i].onlineUsuario = true

            localStorage.setItem('objetoUsuarios', JSON.stringify(vetorCadastro))

            usuarioLogado = true

            vetorCadastro = JSON.parse(localStorage.getItem('objetoUsuarios'))

            if (emailLogin.value == 'adm' && senhaLogin.value == 'admin') {

                window.location.href = "perfiladmin.html"

            } else {

                window.location.href = "principallogado.html"

            }

        }

    }



    if (!usuarioLogado) {

        alert('Email ou Senha incorretos.')

    }

}

function EditarUsuario() {


    vetorCadastro = JSON.parse(localStorage.getItem('objetoUsuarios'))

    for (let i = 0; i < vetorCadastro.length; i++) {

        if (editarEmail.value == vetorCadastro[i].emailUsuario) {

            let objetoAtualizado = {

                nomeUsuario: editarNome.value,
                emailUsuario: editarEmail.value,
                senhaUsuario: editarSenha.value,
                onlineUsuario: true

            }

            console.log(objetoAtualizado)

            vetorCadastro.splice(i, 1, objetoAtualizado)

            localStorage.setItem('objetoUsuarios', JSON.stringify(vetorCadastro))

            alert("Perfil editado!")

        }

    }

}




///////// EXCLUIR \\\\\\\\

function ExcluirUsuario() {


    vetorCadastro = JSON.parse(localStorage.getItem('objetoUsuarios'))

    for (let i = 0; i < vetorCadastro.length; i++) {

        if (excluirEmail.value == vetorCadastro[i].emailUsuario) {

            vetorCadastro.splice(i, 1)

            localStorage.setItem('objetoUsuarios', JSON.stringify(vetorCadastro))

            alert("Usuário excluido com sucesso.")

        }

    }

}

///////// lISTAR COMPRAS \\\\\\\\\

function listarPedidos() {

    let lista = ''

    carrinho = JSON.parse(localStorage.getItem('carrinho'))

    if (carrinho == null) {

        lista = 'Não existem pedidos efetuados!'

    } else {

        for (i = 0; i < carrinho.length; i++) {

            lista = lista + Object.values(carrinho[i]).join(' - ') + '<br><br>'

        }

    }

    document.getElementById("infolista").innerHTML = lista

}

/////// PREENCHER OS CAMPOS AUTOMATICAMENTE \\\\\\\\


// for (i = 0; i < vetorCadastro.length; i++) {

//     if (emailLogin.value == vetorCadastro[i].emailUsuario) {

//         emailPerfil.value = vetorCadastro[i].emailUsuario
//         senhaPerfil.value = vetorCadastro[i].senhaUsuario


//     }

// }



/////// PERFIL ADMIN \\\\\\\\


///////// ADICIONAR PRODUTO \\\\\\\\\

function AdicionarProduto() {


    let objetoProdutos = {

        nomeProduto: '',
        valorProduto: '',

    }

    objetoProdutos.nomeProduto = adicionarProduto.value
    objetoProdutos.valorProduto = adicionarValorProduto.value


    vetorCadastroProdutos = JSON.parse(localStorage.getItem('objetoProdutos'))

    if (vetorCadastroProdutos == null) {

        vetorCadastroProdutos = []

    }

    if (adicionarProduto.value != '') {

        vetorCadastroProdutos.push(objetoProdutos)
        localStorage.setItem('objetoProdutos', JSON.stringify(vetorCadastroProdutos))





    } else {

        alert('Preencha os campos corretamente para cadastrar o produto.')

    }

    listarProduto()

}


function PesquisarProduto() {

    let produtoEncontrado = false

    vetorCadastroProdutos = JSON.parse(localStorage.getItem('objetoProdutos'))

    for (i = 0; i < vetorCadastroProdutos.length; i++) {

        if (pesquisaProduto.value == vetorCadastroProdutos[i].nomeProduto) {

            produtoEncontrado = true

            editarProduto.value = vetorCadastroProdutos[i].nomeProduto
            editarValorProduto.value = vetorCadastroProdutos[i].valorProduto


        }

    }

    if (!produtoEncontrado) {

        alert('Produto não encontrado.')

    }


}


function EditarProduto() {

    vetorCadastroProdutos = JSON.parse(localStorage.getItem('objetoProdutos'))

    for (let i = 0; i < vetorCadastroProdutos.length; i++) {

        if (editarProduto.value == vetorCadastroProdutos[i].nomeProduto) {


            let objetoProdutosAtualizados = {

                nomeProduto: editarProduto.value,
                valorProduto: editarValorProduto.value,

            }

            console.log(objetoProdutosAtualizados)

            vetorCadastroProdutos.splice(i, 1, objetoProdutosAtualizados)

            localStorage.setItem('objetoProdutos', JSON.stringify(vetorCadastroProdutos))

            alert("Produto editado!")

        }

    }

    listarProduto()

}


function ExcluirProduto() {

    let produtoExcluido = false

    vetorCadastroProdutos = JSON.parse(localStorage.getItem('objetoProdutos'))

    for (let i = 0; i < vetorCadastroProdutos.length; i++) {

        if (excluirProduto.value == vetorCadastroProdutos[i].nomeProduto) {

            produtoExcluido = true

            vetorCadastroProdutos.splice(i, 1)

            localStorage.setItem('objetoProdutos', JSON.stringify(vetorCadastroProdutos))

            alert("Produto excluído com sucesso.")

        }

    }

    if (!produtoExcluido) {

        alert("Produto não encontrado.")

    }

    listarProduto()

}

function listarProduto() {


    let lista = ''

    vetorCadastroProdutos = JSON.parse(localStorage.getItem('objetoProdutos'))

    if (vetorCadastroProdutos == null || vetorCadastroProdutos.length == 0) {

        lista = 'Não existem produtos cadastrados!'

    } else {

        for (i = 0; i < vetorCadastroProdutos.length; i++) {

            lista = lista + Object.values(vetorCadastroProdutos[i]).join(' - ') + '<br>'

        }

    }

    document.getElementById("infolista").innerHTML = lista


}


//////// PREENCHER INPUTS NA TELA DE PERFIL \\\\\\\\\\\\\\

vetorCadastro = JSON.parse(localStorage.getItem('objetoUsuarios'))

for (i = 0; i < vetorCadastro.length; i++) {

    if (vetorCadastro[i].onlineUsuario == true) {


        emailPerfil.value = vetorCadastro[i].emailUsuario
        senhaPerfil.value = vetorCadastro[i].senhaUsuario

        break

    }

}

vetorCadastro = JSON.parse(localStorage.getItem('objetoUsuarios'))

for (i = 0; i < vetorCadastro.length; i++) {

    if (vetorCadastro[i].onlineUsuario == true) {


        editarNome.value = vetorCadastro[i].nomeUsuario
        editarSenha.value = vetorCadastro[i].senhaUsuario
        editarEmail.value = vetorCadastro[i].emailUsuario

        break

    }

}

document.addEventListener('DOMContentLoaded', function() {
    let scrollButton = document.getElementById('editarButton');
    let targetElement = document.querySelector('.editCadastro');
    
    if(scrollButton == null) return
    scrollButton.addEventListener('click', smoothScroll);
    
    function smoothScroll() {
    window.scrollTo({
    top: targetElement.offsetTop,
    behavior: 'smooth'
    });
    }
    });