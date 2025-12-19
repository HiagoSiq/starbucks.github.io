var img = document.querySelector(".copao");
var fundo = document.querySelector(".circulo");
var botaoMenu = document.querySelector(".botao");
var inscricao = document.querySelector(".inscricao");
var botaoEmail = document.querySelector(".part");
var emailInput = document.querySelector(".email");
var avisoIncorreto = document.querySelector(".incorreto");
botaoMenu.onclick = () => {
    inscricao.classList.add("ativo");

    botaoMenu.style.backgroundColor = "#052b01ff";
    botaoMenu.style.animation = "none";
}
botaoEmail.onclick = () => {
    if (!emailInput.validity.valid) {
        avisoIncorreto.classList.add("ativo");
    } else {

        avisoIncorreto.classList.remove("ativo");
        inscricao.classList.remove("ativo");
        botaoMenu.disabled = true
        botaoMenu.textContent = "Inscrito!";
        mostrarNotificacao("Inscrição realizada com sucesso!");
    }
}

function trocarImagem(imagem, corFundo) {
    img.src = imagem;
    fundo.style.backgroundColor = corFundo;
}
function mostrarNotificacao(texto) {
    const n = document.getElementById("notificacao");
    n.textContent = texto;
    n.classList.add("ativa");

    setTimeout(() => {
        n.classList.remove("ativa");
    }, 3000);
}
