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

    virarTudo()


    ganhoEL.innerHTML = `Perdeu tudo!`;
    console.log(parseInt(saldoAtual.innerText) - valorDaAposta)

    if ((parseInt(saldoAtual.innerText) - valorDaAposta) == 0) {
        saldoAtual.innerHTML = parseInt(saldoAtual.value) - valorDaAposta
        console.log (document.getElementById("saldoAtual").value)
        overModal.showModal()
    } else {
        // saldoAtual.innerHTML = parseInt(saldoAtual.value) - valorDaAposta
        console.log (document.getElementById("saldoAtual").value)
        perdeModal.showModal()
    }

    

}

function duplicador(carta){
    carta.style.backgroundImage = "url(Scr/Assets/Cards/Duplicador.png)";
    valorGanho = valorGanho * 2
 
    ganhoEL.innerHTML = `Dobrou! Ganhou ${valorGanho}`;
}

function divididor(carta){
    carta.style.backgroundImage = "url(Scr/Assets/Cards/Faca.png)";
    ganhoEL.innerHTML = `Assalto!!! Te roubaram ${parseInt((valorGanho / 10) / 4)*10*3}!`;

    valorGanho = parseInt((valorGanho / 10) / 4)*10

    ganhoEL.innerHTML = ganhoEL.innerHTML + ` Lhe restou ${valorGanho}`

    


}