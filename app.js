// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
//funcion para agregar amigos
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value;

    if (nombre === "") {
        alert("Por favor, inserte un nombre válido");
        return;
    }

    amigos.push(nombre);

    input.value="";

    mostrarLista();

}
//funcion para mostrar la lista de amigos
function mostrarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for(let i = 0; i<amigos.length; i++){
        let li = document.createElement("li");
        li.textContent= amigos[i];
        lista.appendChild(li);
    }
}
//funcion para sortear un amigo
function sortearAmigo() {
    if(amigos.length === 0){
        alert("No hay amigos para sortear");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    resultado.innerHTML = `<li> EL amigo secreto es : <strong> ${amigoSorteado}</strong></li>`;
}

