const telaCadastro = document.getElementById("Cadastro");


const btnCad = document.getElementById("btnCad");

const impNome = document.getElementById("nome");
const impSaldo = document.getElementById("saldo");



impNome.style.borderColor = "white";
impSaldo.style.borderColor = "white";

function cadastrar () {
  console.log(  'sim')
  let nome = document.getElementById("nome").value;
  let saldo = parseInt(document.getElementById("saldo").value);
  

  if ((nome === "") || ((isNaN(saldo) === true))) {
    impNome.style.borderColor = "white";
    impSaldo.style.borderColor = "white";

    if (nome === ""){
      impNome.style.borderColor = "red";
      alert("Preencha o nome.");
    }
    if (isNaN(saldo) === true){
      impSaldo.style.borderColor = "red";
      alert("Preencha o saldo atual corretamente.");
    }
  } else {
    console.log (saldo)
    localStorage.setItem("saldo", saldo)


    console.log(isNaN(saldo));
    window.location.href = "jogo.html";

  }
};
