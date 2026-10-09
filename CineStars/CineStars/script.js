const gridAtores = document.getElementById("gridAtores");
const campoBusca = document.getElementById("campoBusca");
const contador = document.getElementById("contador");
const mensagemVazia = document.getElementById("mensagemVazia");

// Converte a data
function formatarData(data) {
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
}

// Cria os cards 
function renderizarAtores(lista) {
    gridAtores.innerHTML = "";

    lista.forEach((ator) => {
        const card = document.createElement("article");
        card.className = "card-ator";

        const foto = document.createElement("img");
        foto.className = "foto-ator";
        foto.src = ator.foto;
        foto.alt = `Foto de ${ator.nome}`;
        foto.loading = "lazy";

        foto.onerror = function () {
            this.onerror = null;
            this.src = "https://placehold.co/400x533/242424/d9ad65?text=Sem+foto";
        };

        const informacoes = document.createElement("div");
        informacoes.className = "informacoes-ator";

        const nome = document.createElement("h3");
        nome.textContent = ator.nome;

        const pais = document.createElement("p");
        pais.className = "dado-ator";
        const rotuloPais = document.createElement("strong");
        rotuloPais.textContent = "País";
        pais.append(rotuloPais, document.createTextNode(ator.pais));

        const nascimento = document.createElement("p");
        nascimento.className = "dado-ator";
        const rotuloNascimento = document.createElement("strong");
        rotuloNascimento.textContent = "Data de nascimento";
        nascimento.append(
            rotuloNascimento,
            document.createTextNode(formatarData(ator.nascimento))
        );

        informacoes.append(nome, pais, nascimento);
        card.append(foto, informacoes);
        gridAtores.appendChild(card);
    });

    contador.textContent =
        `${lista.length} ${lista.length === 1 ? "pessoa encontrada" : "pessoas encontradas"}`;

    mensagemVazia.hidden = lista.length !== 0;
}

// Filtra os nomes
function filtrarAtores() {
    const textoBusca = campoBusca.value.toLowerCase().trim();

    const atoresFiltrados = atores.filter((ator) =>
        ator.nome.toLowerCase().includes(textoBusca)
    );

    renderizarAtores(atoresFiltrados);
}

// Mostra os atores
renderizarAtores(atores);
