
import React from 'react';
import Produtos from './Components/CorpoSite/CadastroProdutos/Produtos';
import Cliente from './Components/CorpoSite/CadastroCliente/cadastroCliente';
import Home from './Components/Home/Home';
import { Switch, Route, BrowserRouter } from 'react-router-dom';


function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/clientes" exact component={Cliente} />
          <Route path="/produtos" exact component={Produtos} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;