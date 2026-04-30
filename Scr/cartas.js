let ganhoEL = document.getElementById("ganho");



function rara(carta, valorDaAposta){
    carta.style.backgroundImage = 'url(Scr/Assets/Cards/Rara.png)';
       
        valorGanho = valorGanho + (3 * valorDaAposta);

        ganhoEL.innerHTML = `Triplicou! Ganhou ${valorGanho}`;
}
function incomum(carta, valorDaAposta){
    carta.style.backgroundImage = "url(Scr/Assets/Cards/Incomum.png)";

    valorGanho = valorGanho + (2 * valorDaAposta)

    ganhoEL.innerHTML = `Duplicou! Ganhou ${valorGanho}`; 
}
function comum(carta, valorDaAposta){ 
    carta.style.backgroundImage = "url(Scr/Assets/Cards/Comum.png)";

    valorGanho = valorGanho + valorDaAposta

    ganhoEL.innerHTML = `Se pagou! Recebeu ${valorGanho}`;
}

function bomba(carta, valorDaAposta){
    

    carta.style.backgroundImage = "url(Scr/Assets/Cards/Bomba.png)";
    valorGanho = 0

    ganhoEL.innerHTML = `Perdeu tudo!`;
    console.log(saldoPos - valorDaAposta)

    if ((saldoPos - valorDaAposta) == 0) {
        saldo = saldoPos - valorDaAposta
        overModal.showModal()
    } else {
        saldo = saldoPos - valorDaAposta
        perdeModal.showModal()
    }

    

}

function duplicador(carta){
    carta.style.backgroundImage = "url(Scr/Assets/Cards/Dublicador.png)";
    valorGanho = valorGanho * 2
 
    ganhoEL.innerHTML = `Dobrou! Ganhou ${valorGanho}`;
}

function divididor(carta){
    carta.style.backgroundImage = "url(Scr/Assets/Cards/Faca.png)";


    valorGanho = parseInt((valorGanho / 10) / 2)*10

    ganhoEL.innerHTML = `Pela metade! Restou ${valorGanho}`;


}