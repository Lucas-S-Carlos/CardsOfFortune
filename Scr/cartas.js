let ganhoEL = document.getElementById("ganho");



function rara(carta, valorDaAposta){
    virar(carta, 'url(Scr/Assets/Cards/Rara.png)')
    
    confetti({
        count: 100,			
        size: 2,			
        velocity: 200,	
        fade: false		
    });
       
    valorGanho = valorGanho + (3 * valorDaAposta);

    ganhoEL.innerHTML = `Triplicou! Ganhou ${valorGanho}`;
}


function incomum(carta, valorDaAposta){
    virar(carta, "url(Scr/Assets/Cards/Incomum.png)")

    confetti({
        count: 100,			
        size: 1,		
        velocity: 200,		
        fade: false			
    });

    valorGanho = valorGanho + (2 * valorDaAposta)
    ganhoEL.innerHTML = `Duplicou! Ganhou ${valorGanho}`; 
}


function comum(carta, valorDaAposta){ 
    virar(carta, "url(Scr/Assets/Cards/Comum.png)")

    valorGanho = valorGanho + valorDaAposta

    ganhoEL.innerHTML = `Se pagou! Recebeu ${valorGanho}`;
}



function bomba(carta, valorDaAposta){
    
    virar(carta, "url(Scr/Assets/Cards/Bomba.png)")

    valorGanho = 0

    virarTudo()


    ganhoEL.innerHTML = `Perdeu tudo!`;


    if ((parseInt(saldoAtual.innerText) - valorDaAposta) == 0) {
        saldoAtual.innerHTML = parseInt(saldoAtual.value) - valorDaAposta

        overModal.showModal()
    } else {
        // saldoAtual.innerHTML = parseInt(saldoAtual.value) - valorDaAposta
        perdeTexto.innerHTML = perdeTexto.innerText + ` Mas ainda resta ${parseInt(saldoAtual.innerText) - 10}! Jogue Novamente!`
        perdeModal.showModal()
    }

    

}

function duplicador(carta){
    virar(carta, "url(Scr/Assets/Cards/Duplicador.png)")

    confetti({
       	// Origin position
        count: 100,			// Number of particles
        size: 3,			// Size of the particles
        velocity: 200,		// Initial particle velocity
        fade: false			// Particles fall off the screen, or fade out
    });

    valorGanho = valorGanho * 2
 
    ganhoEL.innerHTML = `Dobrou! Ganhou ${valorGanho}`;
}

function divididor(carta){
    virar(carta, "url(Scr/Assets/Cards/Faca.png)")

    ganhoEL.innerHTML = `Assalto!!! Te roubaram ${parseInt((valorGanho / 10) / 4)*10*3}!`;

    valorGanho = parseInt((valorGanho / 10) / 4)*10

    ganhoEL.innerHTML = ganhoEL.innerHTML + ` Lhe restou ${valorGanho}`

}


function virar(carta, imagem) {
    carta.style.transform = "scaleX(0)";

    setTimeout(() => {
        carta.style.transform = "scaleX(1)";
    }, 500);
    setTimeout(() => {carta.style.backgroundImage = imagem;}, 500);


    }