import React from 'react';
// import { Container } from './styles';

// match para acessar o parâmetro, dentro da propriedade match tem a propriedade params
export default function Repository({ match }) {
  // decodeURIComponente para transformar %2F em /
  return <h1>Repository: {decodeURIComponent(match.params.repository)}</h1>;
}
