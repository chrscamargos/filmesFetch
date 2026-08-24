# filmesFetch
Aplicação web desenvolvida para a atividade prática da Sprint de Consumo de API do SENAI, com o objetivo de consultar dados em tempo real da API pública do The Movie Database (TMDB) utilizando JavaScript assíncrono e apresentá-los dinamicamente.

## Estrutura do Projeto
A organização de diretórios e arquivos da aplicação atende à estrutura especificada:
```text
filmesFetch/
├── css/
│   └── style.css
├── js/
│   ├── config.example.js
│   ├── config.js
│   └── script.js
├── .gitignore
├── index.html
└── README.md
```

## Configuração da API Key

O projeto consome a API do TMDB, que exige uma chave de autenticação. Por segurança, o arquivo `js/config.js` não é versionado no repositório, ele está listado no `.gitignore`.

Para rodar o projeto localmente:

1. Clone o repositório
2. Copie `js/config.example.js` e renomeie a cópia para `js/config.js`
3. Gere uma chave de API gratuita em [themoviedb.org](https://www.themoviedb.org/settings/api) e insira em `config.js`:
```js
const API_KEY = "sua_chave_aqui";
```
4. Abra o `index.html` no navegador (recomendado usar Live Server)
