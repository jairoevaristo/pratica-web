let produtos = [];
let id = 0;

function addProduto({ nome, descricao, preco, categoria }) {
  id += 1;
  produtos.push({ id, nome, descricao: descricao.trim(), preco, categoria });
}

function editProduto({ id, nome, descricao, preco, categoria }) {
  const produto = produtos.map((item) => {
    if (item.id === id) {
      return {
        id: item.id,
        nome: nome || item.nome,
        descricao: descricao.trim() || item.descricao.trim(),
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
  console.log(produtos);
  const produto = produtos.find((item) => item.id === Number(id));
  console.log(produto);
  return produto;
}

function getProduto() {
  return produtos;
}

module.exports = { addProduto, getProduto, editProduto, findProdutoById };
