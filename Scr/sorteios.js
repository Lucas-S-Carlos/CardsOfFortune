let CartasViradas = 0



function Sorteio(carta){
    

    let sorte = (Math.floor(Math.random() * 100) + 1) //gera um número de 1 até 100
    console.log(sorte)

    if (CartasViradas == 0) {
        Sorte1(sorte, carta)
    } else if (CartasViradas == 1) {
        Sorte2(sorte, carta)
    } else if (CartasViradas == 2) {
        Sorte3(sorte, carta)
    }

    CartasViradas = CartasViradas + 1
}

function Sorte1(sorte, carta){
    console.log("sorte1")
    if (sorte <= 40){                                                       // 1 até 40
        carta.style.backgroundImage = 'url(Scr/Assets/Cards/Rara.png)';
    } 
    else if((sorte > 40) && (sorte <= 80)){                                 //41 até 80
        carta.style.backgroundImage = "url(Scr/Assets/Cards/Incomum.png)";
    } 
    else if(sorte > 80){                                                    //81 até 100
        carta.style.backgroundImage = "url(Scr/Assets/Cards/Comum.png)";
    } 
}

function Sorte2(sorte, carta){
    console.log("sorte2")
    if (sorte <= 20){                                                       // 1 até 20
        carta.style.backgroundImage = 'url(Scr/Assets/Cards/Rara.png)';
    } 
    else if((sorte > 20) && (sorte <= 50)){                                 //21 até 50
        carta.style.backgroundImage = "url(Scr/Assets/Cards/Incomum.png)";
    } 
    else if((sorte > 50) && (sorte <= 70)){                                 //51 até 70
        carta.style.backgroundImage = "url(Scr/Assets/Cards/Comum.png)";
    } 
    else if((sorte > 70) && (sorte <= 80)){                                 //71 até 80
        carta.style.backgroundImage = "url(Scr/Assets/Cards/Bomba.png)";
    } 
    else if((sorte > 80) && (sorte <= 90)){                                 //81 até 90
        carta.style.backgroundImage = "url(Scr/Assets/Cards/Dublicador.png)";
    } 
    else if(sorte > 90) {                                                   //91 até 100
        carta.style.backgroundImage = "url(Scr/Assets/Cards/Faca.png)";
    } 
}

function Sorte3(sorte, carta){
    console.log("sorte3")
    if (sorte <= 7){                                                       // 1 até 7
        carta.style.backgroundImage = 'url(Scr/Assets/Cards/Rara.png)';
    } 
    else if((sorte > 7) && (sorte <= 17)){                                 //8 até 17
        carta.style.backgroundImage = "url(Scr/Assets/Cards/Incomum.png)";
    } 
    else if((sorte > 17) && (sorte <= 37)){                                 //18 até 37
        carta.style.backgroundImage = "url(Scr/Assets/Cards/Comum.png)";
    } 
    else if((sorte > 37) && (sorte <= 67)){                                 //38 até 67
        carta.style.backgroundImage = "url(Scr/Assets/Cards/Bomba.png)";
    } 
    else if((sorte > 68) && (sorte <= 70)){                                 //68 até 70
        carta.style.backgroundImage = "url(Scr/Assets/Cards/Dublicador.png)";
    } 
    else if(sorte > 70) {                                                   //71 até 100
        carta.style.backgroundImage = "url(Scr/Assets/Cards/Faca.png)";
    } 
}