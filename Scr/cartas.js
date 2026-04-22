ganhoEL = document.getElementById("ganho");

let ValorGanho = 0

function rara(carta, valorDaAposta){
    carta.style.backgroundImage = 'url(Scr/Assets/Cards/Rara.png)';
       
        ValorGanho = ValorGanho + (3 * valorDaAposta);
        console.log(ValorGanho);
        ganhoEL.innerHTML = `Triplicou! Ganhou ${ValorGanho}`;
}
function incomum(carta, valorDaAposta){
    carta.style.backgroundImage = "url(Scr/Assets/Cards/Incomum.png)";

    ValorGanho = ValorGanho + (2 * valorDaAposta)
    console.log(ValorGanho)
    ganhoEL.innerHTML = `Duplicou! Ganhou ${ValorGanho}`; 
}
function comum(carta, valorDaAposta){ 
    carta.style.backgroundImage = "url(Scr/Assets/Cards/Comum.png)";

    ValorGanho = ValorGanho + valorDaAposta
    console.log(ValorGanho)
    ganhoEL.innerHTML = `Se pagou! Recebeu ${ValorGanho}`;
}

function bomba(carta){
    carta.style.backgroundImage = "url(Scr/Assets/Cards/Bomba.png)";
    ValorGanho = 0
    console.log(ValorGanho)
    ganhoEL.innerHTML = `Perdeu tudo!`;
}

function duplicador(carta){
    carta.style.backgroundImage = "url(Scr/Assets/Cards/Dublicador.png)";
    ValorGanho = ValorGanho * 2
    console.log(ValorGanho)
    ganhoEL.innerHTML = `Dobrou! Ganhou ${ValorGanho}`;
}

function divididor(carta){
    carta.style.backgroundImage = "url(Scr/Assets/Cards/Faca.png)";
    ValorGanho = ValorGanho / 2
    console.log(ValorGanho)
    ganhoEL.innerHTML = `Pela metade! Restou ${ValorGanho}`;
}