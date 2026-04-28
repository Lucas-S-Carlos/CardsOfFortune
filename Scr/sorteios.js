let CartasViradas = 0
let ListaDeCartas = []

const coletar = document.getElementById("coletar")

function Sorteio(carta){
    const valorDaAposta = parseInt(document.getElementById("entrada").value)


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
    console.log(valorDaAposta)
    if (sorte <= 40){                                                       // 1 até 40
        rara(carta, valorDaAposta)
    } 
    else if((sorte > 40) && (sorte <= 80)){                                 //41 até 80
        incomum(carta, valorDaAposta)
    } 
    else if(sorte > 80){                                                    //81 até 100
        comum(carta, valorDaAposta)
    } 
}

function Sorte2(sorte, carta, valorDaAposta){
    console.log("sorte2")
    if (sorte <= 20){                                                       // 1 até 20
        rara(carta, valorDaAposta)
    } 
    else if((sorte > 20) && (sorte <= 50)){                                 //21 até 50
        incomum(carta, valorDaAposta)

    } 
    else if((sorte > 50) && (sorte <= 70)){                                 //51 até 70
        comum(carta, valorDaAposta)
    } 
    else if((sorte > 70) && (sorte <= 80)){                                 //71 até 80
        bomba(carta)
    } 
    else if((sorte > 80) && (sorte <= 90)){                                 //81 até 90
        duplicador(carta)
    } 
    else if(sorte > 90) {                                                   //91 até 100
        divididor(carta)
    } 
}

function Sorte3(sorte, carta, valorDaAposta){
    console.log("sorte3")
    if (sorte <= 7){                                                       // 1 até 7
        rara(carta, valorDaAposta)
    } 
    else if((sorte > 7) && (sorte <= 17)){                                 //8 até 17
        incomum(carta, valorDaAposta)
    } 
    else if((sorte > 17) && (sorte <= 37)){                                 //18 até 37
        comum(carta, valorDaAposta)
    } 
    else if((sorte > 37) && (sorte <= 67)){                                 //38 até 67
        bomba(carta)
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
    if (sorte <= 3){                                                       // 1 até 7
        rara(carta, valorDaAposta)
    } 
    else if((sorte > 3 && (sorte <= 13))){                                 //8 até 17
        incomum(carta, valorDaAposta)
    } 
    else if((sorte > 13) && (sorte <= 30)){                                 //18 até 37
        comum(carta, valorDaAposta)
    } 
    else if((sorte > 30) && (sorte <= 80)){                                 //38 até 67
        bomba(carta)
    } 
    else if((sorte > 80) && (sorte <= 85)){                                 //68 até 70
        duplicador(carta)
    } 
    else if(sorte > 85) {                                                   //71 até 100
        divididor(carta)
    } 
}
