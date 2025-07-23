const botaoPlay = document.getElementById("botao_play");
const sectionPlay = document.querySelector(".play-game");
const sectionPalavraChave = document.querySelector(".palavra-chave");
const teclado = document.querySelector(".teclado");
const containerBotoes = document.querySelector(".container__botoes-teclado");
const palavraCorreta = sectionPalavraChave.querySelector(".palavra-correta");
const dicaPalavra = sectionPalavraChave.querySelector(".dica");
const sectionTentativas = document.querySelector(".tentativas");
const sectionFimDeJogo = document.querySelector(".fim-de-jogo");
let tentativas = 6;
let palavraSorteada = "";
let tracinhosAtuais = [];
let pontos = 0;




const sortearIndice = sortearNumero()

mostrarTeclado();
ativarTeclado();








