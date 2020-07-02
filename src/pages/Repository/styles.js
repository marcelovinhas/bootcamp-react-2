import styled from 'styled-components';

export const Loading = styled.div`
  color: #ffff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 100vh é altura total da tela*/
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column; /* para mostrar um item embaixo do outro, imagem, título, descrição */
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none; /* tira o underline do link */
  }

  img {
    width: 120px;
    border-radius: 50%; /* para deixar a imagem totalmente arredondada */
    margin-top: 20px; /* margem do link para voltar para a página inicial */
  }

  h1 {
    font-size: 24px;
    margin-top: 20px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px; /* para não ocupar a caixa inteira */
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px; /* distância entre a lista e o header  */
  margin-top: 30px; /* para a borda ficar no centro da distância entre a borda e o header, 30 em cima, 30 embaixo */
  border-top: 1px solid #eee;
  list-style: none; /* tira a bolinha da listagem */

  li {
    display: flex; /* para o titulo ficar ao lado da lista */
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
  }
  /* para estilizar da segunda li para frente  */
  & + li {
    margin-top: 10px;
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #eee;
  }

  div {
    flex: 1; /* para não passar da borda */
    margin-left: 15px; /* distância entre a imagem e o título */

    strong {
      font-size: 16px;

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          /* para quando passar o mouse por cima do link ficar roxo */
          color: #7159c1;
        }
      }

      span {
        background: #eee;
        color: #333;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
        margin-left: 10px; /* distância entre label e título */
      }
    }

    p {
      margin-top: 5px; /* distância entre o nome do autor e o título */
      font-size: 12px;
      color: #999;
    }
  }
`;
