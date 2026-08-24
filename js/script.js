async function buscarFilme() {
    const campoPesquisa = document.getElementById("pesquisa");
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "Buscando resultado...";

    const filmeBuscado = campoPesquisa.value.trim();
    // trim() remove os espaços em branco

    if (filmeBuscado === "") {
        resultado.innerHTML = "O campo de pesquisa está vazio";
        return;
        // valida se dentro de input há algum texto
    }

    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(filmeBuscado)}&language=pt-BR&api_key=${API_KEY}`;
    // encodeURIComponent troca caracteres inválidos na URL

    try {
        const response = await fetch(url);
        const informacoes = await response.json();
        const filmes = informacoes.results;
        console.log(filmes);
        resultado.innerHTML = ""; 
        filmes.forEach(filme => {
            const card = document.createElement("div");
            card.classList.add("filme-card");
            
            // exibição do poster do filme, faz uma pequena validação se existe imagem disponivel no banco
            // caso não exista, utiliza um placeholder:
            let urlImagem;
            if(filme.poster_path === null){
                urlImagem = `https://placehold.co/200x300?text=Sem+Imagem`;
            } else {
                urlImagem = `https://image.tmdb.org/t/p/w200${filme.poster_path}`;
            }


            // inserindo nos cards, titulo e descrição:
            card.innerHTML = `
                <img src="${urlImagem}" alt="${filme.title}">
                <h3>${filme.title}</h3>
                <p>${filme.overview}</p>
            `;
            

            resultado.appendChild(card);
        });
        
    } catch (erro) {
        console.log(erro);
        resultado.innerHTML = "Ocorreu um erro ao buscar";
    }
}

