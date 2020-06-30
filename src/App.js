/*
ORGANIZAÇÃO DE PASTAS
PAGES - páginas da aplicação
MAIN - página principal
REPOSITORY - outra página

STYLES - estilos globais
*/

/*
COMENTÁRIOS DE DENTRO DO RETURN
<> pois react não permite dois elementos sem um elemento por fora
*/
import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
