function saludar() {
  // Simula que el pipeline corrió bien
  document.getElementById('resultado').textContent =
    "✅ Pipeline ejecutado correctamente, pruebas pasaron con exito, build y deploy listos";
}

function forzarError() {
  // Simula que el monitoreo detectó un fallo
  document.getElementById('error').textContent =
    "❌ Se detecto un error en la app, monitoreo activado y alerta enviada";
}