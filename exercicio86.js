/*

Exercício 86:  Crie um objeto "livro" que possui propriedades para o título, 
autor e número de páginas, e um método para exibir o livro na console.

*/

const livro = {
  titulo: "Aprendendo TypeScript",
  autor: "Nathan Rozentals",
  paginas: 384,

  exibirLivro() {
    console.log(`Título: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`Páginas: ${this.paginas}`);
  }
};

livro.exibirLivro();
