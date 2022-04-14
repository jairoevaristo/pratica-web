const { randomUUID } = require("crypto");

let produtos = [];

function addProduto({ nome, descricao, preco, categoria }) {
  const id = randomUUID();
  produtos.push({ id, nome, descricao, preco, categoria });
}

function editProduto({ id, nome, descricao, preco, categoria }) {
  const produto = produtos.map((item) => {
    if (item.id === id) {
      return {
        id: item.id,
        nome: nome || item.nome,
        descricao: descricao || item.descricao,
        preco: preco || item.preco,
        categoria: categoria || item.categoria,
      };
    }

    return item;
  });

  produtos = [];
  produtos = [...produto];
}

function findProdutoById(id) {
  const produto = produtos.find((item) => item.id === id);
  return produto;
}

function getProduto() {
  return produtos;
}

module.exports = { addProduto, getProduto, editProduto, findProdutoById };
