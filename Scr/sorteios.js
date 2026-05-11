let CartasViradas = 0
let ListaDeCartas = []

let ValorDoSorteio = 0


let morteCerta = false;

const coletar = document.getElementById("coletar")

function Sorteio(carta){
    


    let valorDaAposta = parseInt(document.getElementById("entrada").innerText)
    let valorDaApostaHTML = document.getElementById("entrada").innerHTML
    let sorte = (Math.floor(Math.random() * 100) + 1) //gera um número de 1 até 100


    if (CartasViradas == 2){
        coletar.disabled=false
        coletar.classList.add("brilho")
    }

    let ValorDoSorteio = CartasViradas

    

    if (valorDaAposta >= 20) {
        ValorDoSorteio = ValorDoSorteio + 1;
    } if (valorDaAposta >= 50) {
        ValorDoSorteio = ValorDoSorteio + 1;
    } if (valorDaAposta >= 130) {
        ValorDoSorteio = ValorDoSorteio + 1;
    } if (valorDaAposta >= 200){
        morteCerta = true
    }


    console.log(ValorDoSorteio)

    if (morteCerta == true) {
        morte(sorte, carta, valorDaAposta)
        console.log("morte")
    } else 
    if (ValorDoSorteio == 0) {
        Sorte1(sorte, carta, valorDaAposta)
        console.log("sorte1")
    } else if (ValorDoSorteio == 1) {
        Sorte2(sorte, carta, valorDaAposta)
        console.log("sorte2")
    } else if (ValorDoSorteio == 2) {
        Sorte3(sorte, carta, valorDaAposta)
        console.log("sorte3")
    } else if (ValorDoSorteio == 3) {
        sorteResto(sorte, carta, valorDaAposta)
        console.log("sorteresto")
    } else {
        sorteResto2(sorte, carta, valorDaAposta)
        console.log("sorteresto2")
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
    else if(sorte > 50){                                                    //51 até 80
        comum(carta, valorDaAposta)

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

    } else if((sorte > 80) && (sorte <= 87)){                               //81 até 87
        duplicador(carta)

          
    } 
    else if(sorte > 87) {                                                   //88 até 100
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
    else if((sorte > 37) && (sorte <= 77)){                                 //38 até 67
        bomba(carta, valorDaAposta)
    } 
    else if((sorte > 77) && (sorte <= 80)){                                 //68 até 70
        duplicador(carta)

          
    } 
    else if(sorte > 80) {                                                   //71 até 100
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

function sorteResto2(sorte, carta, valorDaAposta){
    console.log("sorteresto")
    if (sorte <= 1){                                                       // 1 
        rara(carta, valorDaAposta)

          
    } 
    else if((sorte > 1 && (sorte <= 6))){                                 //4 até 13
        incomum(carta, valorDaAposta)

          
    } 
    else if((sorte > 6) && (sorte <= 20)){                                 //14 até 30
        comum(carta, valorDaAposta)

          
    } 
    else if((sorte > 20) && (sorte <= 80)){                                 //31 até 80
        bomba(carta, valorDaAposta)
    } 
    else if((sorte > 80) && (sorte <= 81)){                                 //81 até 85
        duplicador(carta)

          
    } 
    else if(sorte > 81) {                                                   //86 até 100
        divididor(carta)
    } 
}

function morte(sorte, carta, valorDaAposta){                            
        bomba(carta, valorDaAposta)
 
}

function SorteioFake(carta){
    
    sorte = (Math.floor(Math.random() * 100) + 1)


    if (sorte <= 20){                                            
        virar(carta, 'url(Scr/Assets/Cards/Rara.png)')
    } 
    else if((sorte > 20) && (sorte <= 50)){   
        virar(carta, 'url(Scr/Assets/Cards/Incomum.png)')       
    } 
    else if((sorte > 50) && (sorte <= 70)){        
        virar(carta, 'url(Scr/Assets/Cards/Comum.png)')     
    } 
    else if((sorte > 70) && (sorte <= 80)){   
        virar(carta, 'url(Scr/Assets/Cards/Bomba.png)') 
    } 
    else if((sorte > 80) && (sorte <= 90)){       
        virar(carta, 'url(Scr/Assets/Cards/Duplicador.png)') 
    } 
    else if(sorte > 90) {                       
        virar(carta, 'url(Scr/Assets/Cards/Faca.png)') 
    } 
}
