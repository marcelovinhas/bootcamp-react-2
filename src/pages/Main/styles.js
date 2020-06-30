/*
consegue estilizar uma tag dentro do tittle
consegue acessar propriedades do componente
*/

import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px; /* svg se refere ao ícone, margin-right distancia o texto do ícone */
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row; /* garante que o input e o botão fiquem um ao lado do outro */

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px; /* espaçamento de 10 em cima e embaixo, 15 na direita e esquerda */
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes` /* keyframes para fazer animações, inicia no from, termina no to */
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  `;

export const SubmitButton = styled.button.attrs((props) => ({
  // attrs = atributos, para poder acessar loading
  type: 'submit',
  disabled: props.loading, // quando loading for true, disabled é true
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    /* estilização para o botão quando disabled for true  */
    cursor: not-allowed;
    opacity: 0, 6;
  }

  ${(props) =>
    props.loading &&
    /* como aqui não precisa de else não usa "? :", usa && se loading for true aplica css */
    css`
      /* conjunto de css a um elemento conforme uma condição/propriedade */
      svg {
        animation: ${rotate} 2s linear infinite; /* animação linear e infinita */
      }
    `}
`;

export const List = styled.ul`
  list-style: none; /* tira a bolinha da listagem */
  margin-top: 30px;

  li {
    /* estilização para cada item da lista */
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    /* adicionar uma borda cinza entre dois repositórios, para separar */
    /* pega todos li e qualquer li que seja seguido por um anterior, ou seja aplica para todos menos no primeiro */
    & + li {
      border-top: 1px solid #eee;
    }

    a {
      /* estilização do link "detalhe" */
      color: #7159c1;
      text-decoration: none; /* para tirar o underline do link */
    }
  }
`;
