function rara(){
    carta.style.backgroundImage = 'url(Scr/Assets/Cards/Rara.png)';
       
        ValorGanho = ValorGanho + (3 * valorDaAposta);
        console.log(ValorGanho);
        ganhoEL.innerHTML = `Triplicou! Ganhou ${ValorGanho}`;
}