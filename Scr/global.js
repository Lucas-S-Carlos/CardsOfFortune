document.getElementById("entrada").value = 0

const coletaModal = document.getElementById("coletaModal") 
let perdeModal = document.getElementById("perdeModal")
let overModal = document.getElementById("gameOverModal")
const resultado = document.getElementById("valorModal")


let saldoAtual = document.getElementById("saldoAtual")
console.log(localStorage.getItem('saldo'))
saldoAtual.innerHTML= localStorage.getItem('saldo');

let valorGanho = 0
let saldoPos = 0


function adicionar (){
    document.getElementById("entrada").value = parseInt(document.getElementById("entrada").value) + 10
}
function adicionar (){
    document.getElementById("entrada").value = parseInt(document.getElementById("entrada").value) + 10
}
function remover (){
    if (parseInt(document.getElementById("entrada").value) == 0) {
        document.getElementById("entrada").value = 0
    } else {
        document.getElementById("entrada").value = parseInt(document.getElementById("entrada").value) - 10
    }
}

function reload() {
    localStorage.clear()
    window.location.href = "Index.html";
}
function reset() {
    podeIr = false
    CartasViradas = 0
    valorDaAposta = 0

    document.getElementById("entrada").value = 0
    Virada = {
    'a1': false, 'a2': false, 'a3': false, 
    'b1': false, 'b2': false, 'b3': false, 
    'c1': false, 'c2': false, 'c3': false, 
    'd1': false, 'd2': false, 'd3': false, 
    'e1': false, 'e2': false, 'e3': false, 
    'f1': false, 'f2': false, 'f3': false}   

        coletar.disabled=true


    ganhoEL.innerHTML = ``; 
    a1.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)";
    a2.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)";
    a3.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; b1.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)";  b2.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; b3.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; c1.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; c2.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; c3.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; d1.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; d2.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; d3.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; e1.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; e2.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; e3.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; f1.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; f2.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; f3.style.backgroundImage = "url(Scr/Assets/Cards/Tras.png)"; 

}


function continuar (result) {

  


    if (result === 'perdeu') {
        const valor =  parseInt(document.getElementById("entrada").value)
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
    resultado.innerHTML = `Você ganhou ${valorGanho} fichas!`
    coletaModal.showModal()
};


function poder(){
    console.log(saldoPos, parseInt(document.getElementById("entrada").value))
    if ((parseInt(document.getElementById("entrada").value) == 0) || (parseInt(document.getElementById("entrada").value) > parseInt(saldoAtual.innerText))) {
        alert('O valor da aposta não pode ser maior que o saldo nem 0!')
        podeIr = false
    } else {
        podeIr = true
    }
    
}
