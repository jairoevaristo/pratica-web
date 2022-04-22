let categorias = [
  { chave: "1", valor: "smartphone" },
  { chave: "2", valor: "movéis" },
  { chave: "3", valor: "eletrodomesticos" },
];

function addCategoria({ valor, chave, camposCustomizados }) {
  categorias.push({ chave, valor, camposCustomizados });
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
