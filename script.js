function logar() {
    let usuario = document.getElementById('inputUsuário').value
    let senha = document.getElementById('inputSenha').value

    if(usuario == "nicolas" && senha == "nicolas123"){
        window.location.href = "home.html"
    }
    else {
        //alert("Usuário/Senha incorretos! Tente novamente!")
        Swal.fire({
        title: "Acesso Negado!",
        text: "Usuário/Senha incorretos! Tente novamente!",
        icon: "error"
});
    }
}