/*
consegue estilizar uma tag dentro do tittle
consegue acessar propriedades do componente
*/

import styled from 'styled-components';

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

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
