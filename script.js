var img = document.querySelector(".copao");
var fundo = document.querySelector(".circulo");
var botaoMenu = document.querySelector(".botao");

function trocarImagem(imagem, corFundo) {
    img.src = imagem;
    fundo.style.backgroundColor = corFundo;
}
function botao() {
    alert("Agradecemos sua inscrição!");
    botaoMenu.onclick = botaoMenu.textContent = "Inscrito!";
    botaoMenu.style.backgroundColor = "#052b01ff";
    botaoMenu.hover = botaoMenu.style.animation = "none";

}