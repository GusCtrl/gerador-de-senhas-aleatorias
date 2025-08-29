function gerarSenha() {
  const tamanho = document.getElementById("tamanho").value;
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!";
  let senha = "";

  for (let i = 0; i < tamanho; i++) {
    const aleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[aleatorio];
  }

  document.getElementById("senha").textContent = senha;
}
