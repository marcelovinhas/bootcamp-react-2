import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box; /* faz com que margin, padding e os outros espaçamento sejam somados com a largura do elemento */
  }

  html, body, #root {
    min-height: 100%; /* faz com que a página ocupe 100% da altura por padrão */
  }

  body {
    background: #7159c1;
    -webkit-font-smoothing: antialiased !important;
    /* deixa a fonte mais definida, !important pq o browser as vezes tira a propriedade */
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
