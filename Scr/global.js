document.getElementById("entrada").value = 0

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