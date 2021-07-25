import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Produtos from './Components/CorpoSite/CadastroProdutos/Produtos';
import Clientes from './Components/CorpoSite/CadastroCliente/cadastroCliente';
import Home from './Components/Home/Home';


function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/clientes" exact component={Clientes} />
          <Route path="/produtos" exact component={Produtos} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;