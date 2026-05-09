const telaCadastro = document.getElementById("Cadastro");


const btnCad = document.getElementById("btnCad");

const impNome = document.getElementById("nome");
const impSaldo = document.getElementById("saldo");



impNome.style.borderColor = "white";
impSaldo.style.borderColor = "white";

function cadastrar () {
  let nome = document.getElementById("nome").value;
  let saldo = parseInt(document.getElementById("saldo").value);
  

  if ((nome === "") || ((isNaN(saldo) === true || (saldo < 10)))) {
    impNome.style.borderColor = "white";
    impSaldo.style.borderColor = "white";

    if (nome === ""){
      impNome.style.borderColor = "red";
      alert("Preencha o nome.");
    }
    if ((isNaN(saldo) === true)){
      impSaldo.style.borderColor = "red";
      alert("Preencha o saldo atual corretamente.");
    }
    if (saldo < 10){
      impSaldo.style.borderColor = "red";
      alert("O saldo atual deve ser maior que 10.");
    }

  } else {

    localStorage.setItem("saldo", saldo)


    window.location.href = "jogo.html";

  }
};
