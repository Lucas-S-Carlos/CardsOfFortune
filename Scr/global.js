document.getElementById("entrada").value = 0
const coletaModal = document.getElementById("coletaModal") 
const resultado = document.getElementById("valorModal")



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
    location.reload(true)
}

function exibirModal(){
    resultado.innerHTML = `Você ganhou ${ValorGanho} fichas!`
    coletaModal.showModal()
};
function poder(){
    if (parseInt(document.getElementById("entrada").value) == 0){
        podeIr = false
    } else {
        podeIr = true
    }
    
}
