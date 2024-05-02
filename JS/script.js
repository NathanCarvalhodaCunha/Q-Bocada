function logar() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if(usuario == "Sergio" && senha == "Montagner147"){
        alert("Bem vindo de volta Sergio!");
        location.href = "despesas.html";
    }
    else{
        alert("Obrigado por fazer o login no nosso cardápio, você já pode aproveitar as nossas delícias!");
        location.href = "cardapio.html";
    }
}
function Senha() {
    var senhaInput = document.getElementById("senha");
    var togglePassword = document.getElementById("Passsword");

    if(senhaInput.type === "password"){
        senhaInput.type = "text";
    }
    else{
        senhaInput.type = "password";
    }
}