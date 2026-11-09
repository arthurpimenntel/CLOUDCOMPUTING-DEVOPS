function mostrarMensagem() {
  document.getElementById("mensagem").innerText =
    "✅ Pipeline funcionando! Deploy realizado com sucesso.";
}

function atualizarRelogio() {
  const agora = new Date().toLocaleString("pt-BR");
  document.getElementById("relogio").innerText = "Data e hora: " + agora;
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);