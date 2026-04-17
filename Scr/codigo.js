let Ncard
let record = {}

let a1 = document.getElementById("A1")
a1.addEventListener("click", () => {
    Ncard = 1
});
let a1V = false 





a1.addEventListener("click", () => {
    if (a1V == false) {
        Sorteio(a1)
        a1V = true
    }
        

});

function Sorteio(carta){
    let sorte = (Math.floor(Math.random() * 100) + 1)
    console.log(sorte)

    if (sorte < 15){
        carta.style.backgroundImage = 'url(Sourse/Cards/Ouro.png)';
        console.log('Ouro')
    } else if((sorte => 15) && (sorte < 50)){
        carta.style.backgroundImage = "url(Sourse/Cards/Prata.png)";
        console.log('Prata')
    } else if(sorte => 50 ){
        carta.style.backgroundImage = "url(Sourse/Cards/Bronze.png)";
        console.log('Bronze')
    }
}
