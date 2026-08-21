async function buscarFilme() {
    const campoPesquisa = document.getElementById("pesquisa");
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "Buscando resultado...";

    const filmeBuscado = campoPesquisa.value.trim();
    // trim() remove os espaços em branco

    if (filmeBuscado === "") {
        resultado.innerHTML = "Digite algo para buscar";
        return;
    }

    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(filmeBuscado)}&language=pt-BR&api_key=${API_KEY}`;
    // encodeURIComponent troca caracteres inválidos na URL
    try {
        const response = await fetch(url);
        const informacoes = await response.json();
        const filmes = informacoes.results;
        console.log(filmes);
        filmes.forEach(filme => {
            console.log(filme.title);
        });
        
    } catch (erro) {
        console.log(erro);
        resultado.innerHTML = "Ocorreu um erro ao buscar";
    }
}

