# CineVerse

## Sobre o Projeto

O **CineVerse** é uma aplicação Front-end desenvolvida para consultar e visualizar informações sobre filmes. O projeto consome a API do **TMDB (The Movie Database)** para trazer dados atualizados sobre lançamentos, notas, sinopses e detalhes técnicos de produções cinematográficas.

O objetivo principal foi praticar o consumo de APIs externas, gerenciamento de rotas em SPAs (Single Page Applications) e estilização responsiva.

---

## Funcionalidades

- **Catálogo de Melhores Filmes:** Exibição dos filmes mais bem avaliados na página inicial.
- **Pesquisa em Tempo Real:** Funcionalidade de busca para encontrar qualquer filme do banco de dados.
- **Página de Detalhes:** Visualização completa com poster, sinopse, orçamento, receita, duração e data de lançamento.
- **Responsividade:** Layout adaptável para dispositivos móveis e desktop.
- **Dark Mode:** Interface moderna com tema escuro.

---

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **[React](https://reactjs.org/)** (Vite): Biblioteca para construção da interface.
- **[TypeScript](https://www.typescriptlang.org/)**: Para tipagem estática e código mais seguro.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de estilização utilitária.
- **[React Router DOM](https://reactrouter.com/)**: Gerenciamento de rotas e navegação.
- **[Axios](https://axios-http.com/)**: Cliente HTTP para requisições à API.
- **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones leves.

---

## Como Rodar o Projeto

### Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/en/)
- Uma chave de API do [TMDB](https://www.themoviedb.org/).

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/rikadus/cine-verse.git
   cd cineverse
   Instale as dependências
   ```

Bash

npm install
Configure as Variáveis de Ambiente Crie um arquivo .env na raiz do projeto e adicione sua chave da API:

Snippet de código

VITE_API_KEY=sua_chave_aqui
VITE_API_BASE=[https://api.themoviedb.org/3/](https://api.themoviedb.org/3/)
VITE_IMG_PREFIX=[https://image.tmdb.org/t/p/w500/](https://image.tmdb.org/t/p/w500/)
Execute o projeto

Bash

npm run dev
Acesse no navegador O projeto estará rodando em http://localhost:5173.

Deploy
O projeto está online e pode ser acessado através deste link: Clique aqui para acessar o CineVerse

https://cine-verse-mocha.vercel.app/

👨‍💻 Autor
Desenvolvido por Ricardo Rodrigo.
