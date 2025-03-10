let amigos = [Daniela, Joao, Bernardo, Catarina];      

document.getElementById("adicionarBtn").addEventListener("click", function() {
    const input = document.getElementById("nomeAmigo");
    const nome = input.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    
    amigos.push(nome);
    console.log("Lista de amigos:", amigos);
    
    input.value = "";
});
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let amigo of amigos) {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
};
document.getElementById("sortearBtn").addEventListener("click", function() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione nomes antes de sortear.");
        return;
    }
    
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    
    document.getElementById("resultadoSorteio").innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
});

