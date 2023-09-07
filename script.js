const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "14 Oct 2023"

//mês 3, semana 3
function countdown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000; //como a resposta viria em ms, foi preciso converter para s dividindo por 1000

    const finalDias = Math.floor(segTotal / 60 / 60 / 24); /*nessa divisão, o primeiro 60 é para transformar os segundos em minutos, 
    o segundo 60 é para transformar os minutos em horas e o 24 para transformar as horas em dias. O Math.floor pega apenas o menor
    número inteiro da conta*/
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24; //pega apenas o resto da divisão de Math.floor(segTotal / 60 / 60) por 24
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

    setTimeout(countdown, 1000); //a função countdown vai ser executada a cada 1000ms, ou seja, 1s
}

function formatoTempo(tempo){
    return tempo < 10? `0${tempo}` : tempo; //se tempo for menor que 10, retorna o 0 concatenado com o tempo, senão, volta apenas o tempo
}

countdown();
// setInterval(countdown, 1000) substituído por setTimeout(countdown, 1000); dentro da própria funcão countdown

function highlightCard(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("card-highlight");
}