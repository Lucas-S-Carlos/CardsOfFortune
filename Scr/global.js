document.getElementById("entrada").value = 0


const coletaModal = document.getElementById("coletaModal") 
let perdeModal = document.getElementById("perdeModal")
let overModal = document.getElementById("gameOverModal")
const resultado = document.getElementById("valorModal")
let sairModal = document.getElementById("sairModal");
const aMais = document.getElementById("mais")
const aMenos = document.getElementById("menos")

let saldoAtual = document.getElementById("saldoAtual")

saldoAtual.innerHTML= localStorage.getItem('saldo') || 0;

document.getElementById('sairTexto').innerHTML=`Saldo final ${saldoAtual.innerText}`;
let valorGanho = 0
let saldoPos = 0


function adicionar (){
    document.getElementById("entrada").innerHTML = parseInt(document.getElementById("entrada").innerText) + 10
}
function remover (){
    if (parseInt(document.getElementById("entrada").innerText) == 0) {
        document.getElementById("entrada").value = 0
    } else {
        document.getElementById("entrada").innerHTML = parseInt(document.getElementById("entrada").innerText) - 10
    }
}

function reload() {
    localStorage.clear()
    window.location.href = "index.html";
}
function reset() {
    podeIr = false
    CartasViradas = 0
    valorDaAposta = 0

    aMais.disabled=false
    aMenos.disabled=false

    document.getElementById("entrada").innerHTML = 0
    Virada = {
    'a1': false, 'a2': false, 'a3': false, 
    'b1': false, 'b2': false, 'b3': false, 
    'c1': false, 'c2': false, 'c3': false, 
    'd1': false, 'd2': false, 'd3': false, 
    'e1': false, 'e2': false, 'e3': false, 
    'f1': false, 'f2': false, 'f3': false}   

        coletar.disabled=true
        coletar.classList.remove("brilho")


    ganhoEL.innerHTML = ``; 
    a1.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)";
    a2.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)";
    a3.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; b1.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)";  b2.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; b3.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; c1.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; c2.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; c3.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; d1.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; d2.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; d3.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; e1.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; e2.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; e3.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; f1.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; f2.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; f3.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; 

}


function continuar (result) {

  


    if (result === 'perdeu') {
        const valor =  parseInt(document.getElementById("entrada").innerText)
        console.log(saldoAtual.innerText, valor)
        console.log(parseInt(saldoAtual.innerText) - valor)
        saldoAtual.innerHTML = parseInt(saldoAtual.innerText) - valor
       
       perdeModal.close()
       reset()
       
    } else if (result === 'ganhou') {
       saldoAtual.innerHTML = parseInt(saldoAtual.innerText) + valorGanho

       coletaModal.close()
       reset()
    }

    coletaModal.close()
}

function exibirModal(){
    console.log("exibe")
    resultado.innerHTML = `Você ganhou ${valorGanho} fichas! Você tem atualmente ${parseInt(saldoAtual.innerText) + parseInt(valorGanho)} fixas de saldo.`
    coletaModal.showModal()
};


function poder(){
    if ((parseInt(document.getElementById("entrada").innerText) == 0) || (parseInt(document.getElementById("entrada").innerText) > parseInt(saldoAtual.innerText))) {
        alert('O valor da aposta não pode ser maior que o saldo nem 0!')
        podeIr = false
    } else {
        aMais.disabled=true
        aMenos.disabled=true
        podeIr = true



    }
    
}

