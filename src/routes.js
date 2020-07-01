import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// BrowserRouter para usar localhost:3000/blablabla
// Switch evita que mais de uma página seja chamada ao mesmo tempo
// Route cada route representa uma página da aplicação

import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository/:repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
