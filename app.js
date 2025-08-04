let listaAmigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, escribe un nombre válido.");
    return;
  }

  listaAmigos.push(nombre);
  mostrarLista();
  input.value = "";
}

function mostrarLista() {
  const ul = document.getElementById("listaAmigos");
  ul.innerHTML = "";

  listaAmigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    ul.appendChild(li);
  });
}

function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  const indice = Math.floor(Math.random() * listaAmigos.length);
  const nombreSorteado = listaAmigos[indice];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 El amigo secreto es: ${nombreSorteado}</li>`;
}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
