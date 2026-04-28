const telaCadastro = document.getElementById("Cadastro");
telaCadastro.showModal();

const btnCad = document.getElementById("btnCad");

btnCad.addEventListener("click", () => {
  let nome = document.getElementById("nome").value;
  const impNome = document.getElementById("nome");
  let saldo = parseInt(document.getElementById("saldo").value);
  const impSaldo = document.getElementById("saldo");

  if ((nome === "") || ((isNaN(saldo) === true))) {
    if (nome === ""){
      impNome.style.borderColor = "red";
      alert("Preencha o nome.");
    }
    if (isNaN(saldo) === true){
      impSaldo.style.borderColor = "red";
      alert("Preencha o saldo atual corretamente.");
    }
  } else {
    console.log(isNaN(saldo));
    telaCadastro.close();
    comecarTimer();
  }
});
