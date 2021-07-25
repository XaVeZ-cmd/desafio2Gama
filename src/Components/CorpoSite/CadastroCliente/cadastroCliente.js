import React, {useState} from 'react';
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';


function Cliente() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cadastro, setCadastro] = useState(false);

  function handleSubmit() {
    const dadosCliente = {
      nome,
      email,
      endereco
    };
    localStorage.setItem('@data-user', JSON.stringify(dadosCliente));
    setNome("");
    setEmail("");
    setEndereco("");
    setCadastro(true); 
  }

  if (cadastro) {
    return (
      <>
      <div class="return">Cliente Cadastrado!</div>
      <Link to="/clientes"><button className="btn btn-primary">Novo Cliente</button></Link>
      <Link to="/"><button className="btn btn-primary">Home</button></Link>
      </>
    )
  }

  return (
    <>
    <Header />
    <div id="container">
      <div className="content">
          <h1 className="title-cadastro">Cadastro de Clientes</h1>
          <div className="cadastro-produto">
              <p className="title-input">Nome Completo</p>
              <input
                placeholder="Nome Completo"
                className="input"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <p className="title-input">E-mail</p>
              <input
                type="text"
                placeholder="Informe seu e-mail"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="title-input">Endereço</p>
              <input
                type="text"
                placeholder="Informe seu endereço"
                className="input"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
          </div>
              <button onClick={handleSubmit} class="btn btn-primary">
                Salvar Cliente
              </button>

      </div> 
    </div>
    </>
  )
}
export default Cliente;
