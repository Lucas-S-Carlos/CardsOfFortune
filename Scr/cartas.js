let ganhoEL = document.getElementById("ganho");



function rara(carta, valorDaAposta){
    carta.style.backgroundImage = 'url(Scr/Assets/Cards/Rara.png)';
       
        valorGanho = valorGanho + (3 * valorDaAposta);
        console.log(valorGanho);
        ganhoEL.innerHTML = `Triplicou! Ganhou ${valorGanho}`;
}
function incomum(carta, valorDaAposta){
    carta.style.backgroundImage = "url(Scr/Assets/Cards/Incomum.png)";

    valorGanho = valorGanho + (2 * valorDaAposta)
    console.log(valorGanho)
    ganhoEL.innerHTML = `Duplicou! Ganhou ${valorGanho}`; 
}
function comum(carta, valorDaAposta){ 
    carta.style.backgroundImage = "url(Scr/Assets/Cards/Comum.png)";

    valorGanho = valorGanho + valorDaAposta
    console.log(valorGanho)
    ganhoEL.innerHTML = `Se pagou! Recebeu ${valorGanho}`;
}

function bomba(carta){
    

    carta.style.backgroundImage = "url(Scr/Assets/Cards/Bomba.png)";
    valorGanho = 0
    console.log(valorGanho)
    ganhoEL.innerHTML = `Perdeu tudo!`;
    perdeModal.showModal()

}

function duplicador(carta){
    carta.style.backgroundImage = "url(Scr/Assets/Cards/Dublicador.png)";
    valorGanho = valorGanho * 2
    console.log(valorGanho)
    ganhoEL.innerHTML = `Dobrou! Ganhou ${valorGanho}`;
}

function divididor(carta){
    carta.style.backgroundImage = "url(Scr/Assets/Cards/Faca.png)";


    valorGanho = parseInt((valorGanho / 10) / 2)*10
    console.log(valorGanho)
    ganhoEL.innerHTML = `Pela metade! Restou ${valorGanho}`;


}