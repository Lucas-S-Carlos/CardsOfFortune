let CartasViradas = 0
let ListaDeCartas = []

const coletar = document.getElementById("coletar")

function Sorteio(carta){
    let valorDaAposta = parseInt(document.getElementById("entrada").value)


    let sorte = (Math.floor(Math.random() * 100) + 1) //gera um número de 1 até 100


    if (CartasViradas == 0) {
        Sorte1(sorte, carta, valorDaAposta)
    } else if (CartasViradas == 1) {
        Sorte2(sorte, carta, valorDaAposta)
    } else if (CartasViradas == 2) {
        Sorte3(sorte, carta, valorDaAposta)
        coletar.disabled=false
    } else {
        sorteResto(sorte, carta, valorDaAposta)
    }

    CartasViradas = CartasViradas + 1
}

function Sorte1(sorte, carta, valorDaAposta){

    if (sorte <= 20){                                                       // 1 até 20
        rara(carta, valorDaAposta)
    } 
    else if((sorte > 20) && (sorte <= 50)){                                 //21 até 50
        incomum(carta, valorDaAposta)
    } 
    else if((sorte > 50) && (sorte <= 80)){                                 //51 até 80
        comum(carta, valorDaAposta)
    } 
    else if(sorte > 80){
        multiplicador(carta, valorDaAposta)
    }
}

function Sorte2(sorte, carta, valorDaAposta){

    if (sorte <= 10){                                                       // 1 até 10
        rara(carta, valorDaAposta)
    } 
    else if((sorte > 10) && (sorte <= 30)){                                 //11 até 30
        incomum(carta, valorDaAposta)

    } 
    else if((sorte > 30) && (sorte <= 70)){                                 //31 até 70
        comum(carta, valorDaAposta)
    } 
    else if((sorte > 70) && (sorte <= 80)){                                 //71 até 80
        bomba(carta, valorDaAposta)
    } 
    else if(sorte > 80) {                                                   //81 até 100
        divididor(carta)
    } 
}

function Sorte3(sorte, carta, valorDaAposta){

    if (sorte <= 3){                                                       // 1 até 3
        rara(carta, valorDaAposta)
    } 
    else if((sorte > 3) && (sorte <= 17)){                                 //4 até 17
        incomum(carta, valorDaAposta)
    } 
    else if((sorte > 17) && (sorte <= 37)){                                 //18 até 37
        comum(carta, valorDaAposta)
    } 
    else if((sorte > 37) && (sorte <= 67)){                                 //38 até 67
        bomba(carta, valorDaAposta)
    } 
    else if((sorte > 67) && (sorte <= 70)){                                 //68 até 70
        duplicador(carta)
    } 
    else if(sorte > 70) {                                                   //71 até 100
        divididor(carta)
    } 
}

function sorteResto(sorte, carta, valorDaAposta){
    console.log("sorteresto")
    if (sorte <= 3){                                                       // 1 até 3
        rara(carta, valorDaAposta)
    } 
    else if((sorte > 3 && (sorte <= 13))){                                 //4 até 13
        incomum(carta, valorDaAposta)
    } 
    else if((sorte > 13) && (sorte <= 30)){                                 //14 até 30
        comum(carta, valorDaAposta)
    } 
    else if((sorte > 30) && (sorte <= 80)){                                 //31 até 80
        bomba(carta, valorDaAposta)
    } 
    else if((sorte > 80) && (sorte <= 85)){                                 //81 até 85
        duplicador(carta)
    } 
    else if(sorte > 85) {                                                   //86 até 100
        divididor(carta)
    } 
}

function SorteioFake(carta){
    
    sorte = (Math.floor(Math.random() * 100) + 1)


    if (sorte <= 20){                                                       // 1 até 20
        carta.style.backgroundImage = 'url(Scr/Assets/Cards/Rara.png)';
    } 
    else if((sorte > 20) && (sorte <= 50)){                                 //21 até 50
        carta.style.backgroundImage = 'url(Scr/Assets/Cards/Incomum.png)';

    } 
    else if((sorte > 50) && (sorte <= 70)){                                 //51 até 70
        carta.style.backgroundImage = 'url(Scr/Assets/Cards/Comum.png)';
    } 
    else if((sorte > 70) && (sorte <= 80)){                                 //71 até 80
        carta.style.backgroundImage = 'url(Scr/Assets/Cards/Bomba.png)';
    } 
    else if((sorte > 80) && (sorte <= 90)){                                 //81 até 90
       carta.style.backgroundImage = 'url(Scr/Assets/Cards/Duplicador.png)';
    } 
    else if(sorte > 90) {                                                   //91 até 100
        carta.style.backgroundImage = 'url(Scr/Assets/Cards/Faca.png)';
    } 
}
