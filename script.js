const audio = document.getElementById('audio-capitulo');
const botaoProximoCapitulo = document.getElementById('proxima');
const botaoCapituloAnterior = document.getElementById('anterior');
const nomeCapitulo = document.getElementById('capitulo');
const botaoPlayPause = document.getElementById('play-pause');

const quantidadeCapitulos = 10;
let taTocando = false;
let capitulo = 1;

function tocarFaixa() {
    botaoPlayPause.classList.add("bi-pause-circle-fill");
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    audio.play();
    taTocando = true;
}

function pausarFaixa() {
    botaoPlayPause.classList.add("bi-play-circle-fill");
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    audio.pause();
    taTocando = false;
}

function tocarOuPausar() {
    if (taTocando === true) {
        pausarFaixa();
    } else {
        tocarFaixa();
    }
}

function faixaAnterior() {
    if (capitulo === 1){
        capitulo = quantidadeCapitulos;
    } else {
        capitulo = capitulo - 1;
    }

    audio.src = "./books/dom-casmurro/" + capitulo + ".mp3"
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    tocarFaixa();
}

function proximoCapitulo() {
    if (capitulo === quantidadeCapitulos){
        capitulo = 1;
    } else {
        capitulo = capitulo + 1;
    }

    audio.src = "./books/dom-casmurro/" + capitulo + ".mp3"
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    tocarFaixa();
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoProximoCapitulo.addEventListener('click', proximoCapitulo);
botaoCapituloAnterior.addEventListener('click', faixaAnterior);
audio.addEventListener("ended", proximoCapitulo);