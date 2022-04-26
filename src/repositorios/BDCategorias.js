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
  const camposCustomizados = [];

  categorias.forEach((item) =>
    item.camposCustomizados?.forEach((element) => {
      camposCustomizados.push(element);
    })
  );

  return {
    categorias,
    camposCustomizados,
  };
}

module.exports = { addCategoria, getCategoria, deleteCategoria };
