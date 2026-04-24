const telaCadastro = document.getElementById("Cadastro");
telaCadastro.showModal();

const btnCad = document.getElementById("btnCad");

btnCad.addEventListener("click", () => {
  let nome = document.getElementById("nome").value;
  let saldo = document.getElementById("saldo").value;

  console.log(nome);
  if 9(nome === "") && ((isNaN(saldo) === true))) {
    alert("seja gente escreva o seu nome");
  } else if  {
    console.log(isNaN(saldo));
    telaCadastro.close();
    comecarTimer();
  }
});
