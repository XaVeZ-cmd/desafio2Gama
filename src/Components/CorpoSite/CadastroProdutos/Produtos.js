import React, {useState} from 'react';


function Produtos() {
  const [produto, setProduto] = useState('');
  const [preco, setPreco] = useState('');
  const [estoque, setEstoque] = useState('');
  const [cadastro, setCadastro] = useState(false);

  function handleSubmit() {
    const dadosProduto = {
      produto,
      preco,
      estoque
    };
    localStorage.setItem('@data-user', JSON.stringify(dadosProduto));
    setProduto("");
    setPreco("");
    setEstoque("");
    setCadastro(true); 
  }

  if (cadastro) {
    return (
      <>
      <div class="return">Produto Cadastrado!</div>
      <a href="/produtos" className="btn btn-primary">Novo Produto</a>
      <a href="/" className="btn btn-primary">Home</a>
      </>
    )
  }

  return (
    
  
    <div id="container">
      <div className="content">
          <h1 className="title-cadastro">Cadastro de Produto</h1>
          <div className="cadastro-produto">
              <p className="title-input">Nome do produto</p>
              <input
                placeholder="nome do produto"
                className="input"
                value={produto}
                onChange={(e) => setProduto(e.target.value)}
              />
              <p className="title-input">Preço</p>
              <input
                type="preço"
                placeholder="digite o preço"
                className="input"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
              />
              <p className="title-input">Estoque</p>
              <input
                type="estoque"
                placeholder="digite a quantidade em estoque"
                className="input"
                value={estoque}
                onChange={(e) => setEstoque(e.target.value)}
              />
          </div>
              <button onClick={handleSubmit} class="btn btn-primary">
                Salvar Produto
              </button>

      </div> 
    </div>
    
  )
}
export default Produtos;