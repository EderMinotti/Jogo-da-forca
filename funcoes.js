function mostrarTeclado() {
    botaoPlay.addEventListener("click", () => {

        sectionPlay.classList.remove("visivel");
        setTimeout(() => {
            sectionPlay.style.display = "none";

            novaPalavra();


            palavraSorteada = palavras[sortearIndice].palavra;
            tracinhosAtuais = palavraSorteada.split("").map(() => "_"); //split separa as letras, map transforma cada letra em "_" 
            palavraCorreta.innerText = tracinhosAtuais.join(" ");


            dicaPalavra.innerText = palavras[sortearIndice].dica
            sectionPalavraChave.style.display = "flex";
            teclado.style.display = "flex";

            setTimeout(() => {
                sectionPalavraChave.classList.add("visivel");
                teclado.classList.add("visivel");
                sectionTentativas.classList.add("visivel");
            }, 400);
        }, 400);
    });
}


function ativarTeclado() {
    containerBotoes.querySelectorAll("button").forEach(botao => {
        botao.addEventListener("click", (evento) => {
            evento.target.classList.add("invisivel")
            const letraClicada = evento.target.innerText.toLowerCase();
            let acertou = false;



            palavraSorteada.split("").forEach((letra, index) => {
                if (removerAcentos(letra) == removerAcentos(letraClicada)) {
                    tracinhosAtuais[index] = letra;
                    acertou = true;
                }
                palavraCorreta.innerText = tracinhosAtuais.join(" ");

            })

            if (!acertou) {
                tentativas--
                mostrarTentativas();
            }

            if (!tracinhosAtuais.includes("_")) {
                pontos++;
                pontosJogo.innerText = `Pontos: ${pontos}`;
                setTimeout(() => {
                    novaPalavra();
                }, 2000);


            }

            if (tentativas == 0) {
                setTimeout(() => {

                    sectionPalavraChave.style.display = "none";
                    teclado.style.display = "none";
                    sectionFimDeJogo.style.display = "flex";

                }, 400)


                setTimeout(() => {
                    teclado.classList.remove(".visivel");
                    sectionPalavraChave.classList.remove("visivel");
                    sectionFimDeJogo.classList.add("visivel");
                }, 1000)

                sectionFimDeJogo.querySelector("button").addEventListener("click", () => {
                    reiniciarJogo();
                })
            }


            if (tentativas == 3) {
                imagensForca.src = "assets/boneco2.png"

            }

            if (tentativas == 1) {
                imagensForca.src = "assets/boneco3.png"
            }


        });
    });
}



function sortearNumero() {
    return parseInt(Math.random() * 50);
}

function mostrarTentativas() {
    paragrafoTentativa = sectionTentativas.querySelector("p");
    paragrafoTentativa.innerText = `Tentativas: ${tentativas}`
}

function novaPalavra() {
    imagensForca.src = "assets/boneco1.png";
    tentativas = 6;
    mostrarTentativas();
    removeInvisivel();
    const indice = sortearNumero()
    palavraSorteada = palavras[indice].palavra;
    tracinhosAtuais = palavraSorteada.split("").map(() => "_");

    palavraCorreta.innerText = tracinhosAtuais.join(" ");
    dicaPalavra.innerText = palavras[indice].dica
    sectionPalavraChave.style.display = "flex";
    teclado.style.display = "flex";



    setTimeout(() => {
        sectionPalavraChave.classList.add("visivel");
        teclado.classList.add("visivel");
        sectionTentativas.classList.add("visivel");


    }, 10)
}

function removerAcentos(palavra) {
    return palavra.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}


function reiniciarJogo() {

    tentativas = 6;
    pontos = 0;
    pontosJogo.innerText = `Pontos: ${pontos}`;
    imagensForca.src = "assets/boneco1.png";
    mostrarTentativas();
    novaPalavra();
    
    sectionFimDeJogo.classList.remove("visivel");
    sectionFimDeJogo.style.display = "none";
    

   

}

function removeInvisivel() {
    containerBotoes.querySelectorAll("button").forEach((botao) => {
        botao.classList.remove("invisivel");
    })
};
