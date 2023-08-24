const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "14 Oct 2023"

function countdown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    /* dia.innerHTML = formatoTempo(finalDias) + "D";
    hora.innerHTML = formatoTempo(finalHoras) + "H";
    minuto.innerHTML = formatoTempo(finalMinutos) + "M";
    segundo.innerHTML = formatoTempo(finalSegundos) + "S";*/
    dia.textContent = formatoTempo(finalDias) + "D";
    hora.textContent = formatoTempo(finalHoras) + "H";
    minuto.textContent = formatoTempo(finalMinutos) + "M";
    segundo.textContent = formatoTempo(finalSegundos) + "S";

    setTimeout(countdown, 1000);
}

function formatoTempo(tempo){
    return tempo < 10? `0${tempo}` : tempo;
}

countdown();
// setInterval(countdown, 1000) substituído por setTimeout(countdown, 1000); dentro da própria funcão countdown