document.getElementById("BotaoEnviar").addEventListener("click",ValidaFormulario)

function ValidaFormulario(){
  if(document.getElementById("nome-do-usuario").value != "" && document.getElementById("email-do-usuario").value != "" && document.getElementById("telefone").value != ""){
    alert("Prontinho! Você receberá as novidades por e-mail :)")
  }else{
    alert("Por favor, preencha os campos nome, e-mail e telefone ;)")
  }
}

