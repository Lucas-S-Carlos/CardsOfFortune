let CartasViradas = 0
let ListaDeCartas = []
ganhoEL = document.getElementById("ganho");

let ValorGanho = 0

function Sorteio(carta){
    const valorDaAposta = parseInt(document.getElementById("entrada").value)

    let sorte = (Math.floor(Math.random() * 100) + 1) //gera um número de 1 até 100


    if (CartasViradas == 0) {
        Sorte1(sorte, carta, valorDaAposta)
    } else if (CartasViradas == 1) {
        Sorte2(sorte, carta, valorDaAposta)
    } else if (CartasViradas == 2) {
        Sorte3(sorte, carta, valorDaAposta)
    }

    CartasViradas = CartasViradas + 1
}

function Sorte1(sorte, carta, valorDaAposta){
    console.log(valorDaAposta)
    if (sorte <= 40){                                                       // 1 até 40

        carta.style.backgroundImage = 'url(Scr/Assets/Cards/Rara.png)';
       
        ValorGanho = ValorGanho + (3 * valorDaAposta);
        console.log(ValorGanho);
        ganhoEL.innerHTML = `Triplicou! Ganhou ${ValorGanho}`;
    } 
    else if((sorte > 40) && (sorte <= 80)){                                 //41 até 80
        carta.style.backgroundImage = "url(Scr/Assets/Cards/Incomum.png)";

        ValorGanho = ValorGanho + (2 * valorDaAposta)
        console.log(ValorGanho)
        ganhoEL.innerHTML = `Duplicou! Ganhou ${ValorGanho}`;
    } 
    else if(sorte > 80){                                                    //81 até 100
        carta.style.backgroundImage = "url(Scr/Assets/Cards/Comum.png)";

        ValorGanho = ValorGanho + valorDaAposta
        console.log(ValorGanho)
        ganhoEL.innerHTML = `Se pagou! Recebeu ${ValorGanho}`;
    } 
}

function Sorte2(sorte, carta, valorDaAposta){
    console.log("sorte2")
    if (sorte <= 20){                                                       // 1 até 20
        carta.style.backgroundImage = 'url(Scr/Assets/Cards/Rara.png)';
        ValorGanho = ValorGanho + (3 * valorDaAposta);

        console.log(ValorGanho);
        ganhoEL.innerHTML = `Triplicou! Ganhou ${ValorGanho}`;
    } 
    else if((sorte > 20) && (sorte <= 50)){                                 //21 até 50
        carta.style.backgroundImage = "url(Scr/Assets/Cards/Incomum.png)";
        ValorGanho = ValorGanho + (2 * valorDaAposta)
        console.log(ValorGanho)
        ganhoEL.innerHTML = `Duplicou! Ganhou ${ValorGanho}`;

    } 
    else if((sorte > 50) && (sorte <= 70)){                                 //51 até 70
        carta.style.backgroundImage = "url(Scr/Assets/Cards/Comum.png)";
        ValorGanho = ValorGanho + valorDaAposta
        console.log(ValorGanho)
        ganhoEL.innerHTML = `Você recebeu o valor da aposta ${ValorGanho}`;
    } 
    else if((sorte > 70) && (sorte <= 80)){                                 //71 até 80
        carta.style.backgroundImage = "url(Scr/Assets/Cards/Bomba.png)";
        ValorGanho = 0
        console.log(ValorGanho)
        ganhoEL.innerHTML = `Perdeu tudo!`;
    } 
    else if((sorte > 80) && (sorte <= 90)){                                 //81 até 90
        carta.style.backgroundImage = "url(Scr/Assets/Cards/Dublicador.png)";
        ValorGanho = ValorGanho * 2
        console.log(ValorGanho)
        ganhoEL.innerHTML = `Dobrou! Ganhou ${ValorGanho}`;
    } 
    else if(sorte > 90) {                                                   //91 até 100
        carta.style.backgroundImage = "url(Scr/Assets/Cards/Faca.png)";
        ValorGanho = ValorGanho / 2
        console.log(ValorGanho)
        ganhoEL.innerHTML = `Pela metade! Restou ${ValorGanho}`;
    } 
}

function Sorte3(sorte, carta, valorDaAposta){
    console.log("sorte3")
    if (sorte <= 7){                                                       // 1 até 7
        carta.style.backgroundImage = 'url(Scr/Assets/Cards/Rara.png)';
        ValorGanho = ValorGanho + (3 * valorDaAposta);
        console.log(ValorGanho);
        ganhoEL.innerHTML = `Triplicou! Ganhou ${ValorGanho}`;
    } 
    else if((sorte > 7) && (sorte <= 17)){                                 //8 até 17
        carta.style.backgroundImage = "url(Scr/Assets/Cards/Incomum.png)";
        ValorGanho = ValorGanho + (2 * valorDaAposta)
        console.log(ValorGanho)
        ganhoEL.innerHTML = `Duplicou! Ganhou ${ValorGanho}`;
    } 
    else if((sorte > 17) && (sorte <= 37)){                                 //18 até 37
        carta.style.backgroundImage = "url(Scr/Assets/Cards/Comum.png)";
        ValorGanho = ValorGanho + valorDaAposta
        console.log(ValorGanho)
        ganhoEL.innerHTML = `Você recebeu o valor da aposta ${ValorGanho}`;
    } 
    else if((sorte > 37) && (sorte <= 67)){                                 //38 até 67
        carta.style.backgroundImage = "url(Scr/Assets/Cards/Bomba.png)";
        ValorGanho = 0
        console.log(ValorGanho)
        ganhoEL.innerHTML = `Perdeu tudo!`;
    } 
    else if((sorte > 68) && (sorte <= 70)){                                 //68 até 70
        carta.style.backgroundImage = "url(Scr/Assets/Cards/Dublicador.png)";
        ValorGanho = ValorGanho * 2
        console.log(ValorGanho)
        ganhoEL.innerHTML = `Dobrou! Ganhou ${ValorGanho}`;
    } 
    else if(sorte > 70) {                                                   //71 até 100
        carta.style.backgroundImage = "url(Scr/Assets/Cards/Faca.png)";
        ValorGanho = ValorGanho / 2
        console.log(ValorGanho)
        ganhoEL.innerHTML = `Pela metade! Restou ${ValorGanho}`;
    } 
}