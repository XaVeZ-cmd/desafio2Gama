import React from 'react';
import { Link } from 'react-router-dom';

const CorpoSite = () => {
  return (
    <>
    <div className="container">
        <div className="row">
          <div className="col-sm-6 cardcliente">
            <div className="card">
              <img className="card-img-top" src="https://blog.clubpetro.com/wp-content/uploads/2017/05/89188-cadastro-de-clientes-essa-pratica-ainda-vale-a-pena.jpg" alt="Cadastro Clientes" />
              <div className="card-body">
                <h5 className="card-title">Cadastro de Clientes</h5>
                <p className="card-text">Módulo para cadastro de clientes</p>
                <Link to="/clientes"><button className="btn btn-primary">Entrar</button></Link>
            </div>
          </div></div>
            <div className="col-sm-6 cardprodutos">
              <div className="card">
                  <img className="card-img-top" src="https://www.infovarejo.com.br/novo/wp-content/uploads/2016/12/O-Cadastro-de-Produtos-como-um-diferencial-competitivo-2-1.png" alt="Imagem de capa do card" />
                  <div className="card-body">
                    <h5 className="card-title">Cadastro de Produtos</h5>
                    <p className="card-text">Módulo para cadstro de Produtos</p>
                    <Link to="/produtos"><button className="btn btn-primary">Entrar</button></Link>
              </div>
            </div>
      </div></div></div>
    </>
    )
}

export default CorpoSite
