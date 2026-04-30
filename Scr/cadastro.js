const telaCadastro = document.getElementById("Cadastro");
telaCadastro.showModal();

const btnCad = document.getElementById("btnCad");

const impNome = document.getElementById("nome");
const impSaldo = document.getElementById("saldo");

const saldoAtual = document.getElementById("saldoAtual")

impNome.style.borderColor = "white";
impSaldo.style.borderColor = "white";

btnCad.addEventListener("click", () => {
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
    saldoPos = saldo
    saldoAtual.innerHTML = saldo

    console.log(isNaN(saldo));
    telaCadastro.close();
    comecarTimer();
  }
});
