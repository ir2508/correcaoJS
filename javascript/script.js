//  QUESITO 2
verResposta1.addEventListener("click", somar);
function somar() {
    let n1 = +numero1.value;
    let n2 = +numero2.value;
    let soma = n1 + n2;
    resposta1.innerHTML = `Resposta: ${soma}`;
}

// QUESITO 3
verResposta2.addEventListener("click", colorir);
function colorir() {
    cardVermelho.style.backgroundColor = "red";
}

// QUESITO 4
verResposta3.addEventListener("click", gerarNumeros);
function gerarNumeros() {
    for (let i = 0; i <= 5; i++) {
        resposta3.innerHTML += "<br>" + i;
    }
}

// QUESITO 5
verResposta4.addEventListener("click", verificarMedia);
function verificarMedia() {
    let mediaAluno = Number.parseFloat(media.value);
    if (mediaAluno >= 6) {
        resposta4.innerHTML = `Resposta: Aprovado`;
    } else {
        resposta4.innerHTML = `Resposta: Reprovado`;
    }

    // resposta4.innerHTML += (+media.value >= 6 ? " Aprovado" : " Reprovado");
}
