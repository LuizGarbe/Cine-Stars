# 🎬 CineStars — Catálogo de Atores e Atrizes

O **CineStars** é uma aplicação web desenvolvida como parte do CheckPoint de Desenvolvimento Web da FIAP. O projeto apresenta um catálogo de atores e atrizes, exibindo informações como fotografia, nome, país e data de nascimento.

A aplicação utiliza HTML, CSS e JavaScript para criar uma interface interativa, responsiva e com um sistema de busca em tempo real.

## ✨ Funcionalidades

* **Catálogo de atores e atrizes:** exibição dos dados em cards organizados em um grid.
* **Fotos e informações:** apresentação do nome, país de origem e data de nascimento.
* **Busca dinâmica:** filtragem dos atores conforme o usuário digita.
* **Contador de resultados:** atualização da quantidade de pessoas encontradas.
* **Mensagem de busca vazia:** aviso quando nenhum resultado corresponde ao termo pesquisado.
* **Layout responsivo:** adaptação da interface para diferentes tamanhos de tela.

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* Array de objetos JavaScript para armazenamento dos dados

## 🔎 Lógica de busca

O filtro utiliza os métodos `filter()` e `includes()`, além do evento `oninput`, para pesquisar os nomes em tempo real.

A busca não diferencia letras maiúsculas de minúsculas, facilitando a localização dos atores e atrizes.

## 📂 Estrutura do projeto

```text
CineStars/
├── index.html
├── style.css
├── script.js
├── dados.js
└── README.md
```

* `index.html`: estrutura e conteúdo da página.
* `style.css`: estilos visuais, grid de cards e responsividade.
* `script.js`: renderização dos cards, formatação das datas e filtro de busca.
* `dados.js`: array de objetos com as informações dos atores e atrizes.
* `README.md`: documentação do projeto.

## 🚀 Como executar

1. Faça o download ou clone este repositório.
2. Mantenha todos os arquivos do projeto na mesma pasta.
3. Abra o arquivo `index.html` no navegador.
4. Digite o nome de um ator ou atriz no campo de busca para filtrar os resultados.

Não é necessário instalar dependências ou configurar um servidor para executar a versão básica.

**Observação:** é necessária uma conexão com a internet para carregar as fotografias hospedadas externamente.

## 🎓 Objetivo acadêmico

Este projeto tem como objetivo praticar conceitos fundamentais de desenvolvimento web, incluindo estruturação de páginas com HTML, estilização com CSS, manipulação do DOM e utilização de métodos de arrays em JavaScript.

## 👨‍💻 Autor

Desenvolvido por Luiz Garbeloto como atividade acadêmica do curso de Ciência da Computação da FIAP.

---

*Projeto educacional — CheckPoint de Desenvolvimento Web | 2026*
