let userOnline = false


function paginiaInicio(){

vetorCadastro = JSON.parse(localStorage.getItem('objetoUsuarios'))

if (vetorCadastro == null){

 window.location.href = 'principal.html'

}else{

    for (let i = 0; i < vetorCadastro.length; i++) {

        if (vetorCadastro[i].onlineUsuario){

            userOnline = true 
            
        }        

    }
        if (userOnline) {


            window.location.href = 'principallogado.html'
            
        }else{


            window.location.href = 'principal.html'

        }

} 



}