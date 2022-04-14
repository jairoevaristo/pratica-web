let categorias = [
  { chave: "1", valor: "smartphone" },
  { chave: "2", valor: "movéis" },
  { chave: "3", valor: "eletrodomesticos" },
];

function addCategoria({ valor, chave }) {
  categorias.push({ chave, valor });
}

function deleteCategoria(chave) {
  const categoria = categorias.filter((item) => item.chave !== chave);
  categorias = [];
  categorias = [...categoria];
}

function getCategoria() {
  return categorias;
}

module.exports = { addCategoria, getCategoria, deleteCategoria };
