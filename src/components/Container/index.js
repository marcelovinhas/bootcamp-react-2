import styled from 'styled-components';

// criação do arquivo para poder usar esse container em mais de uma página
// para isso usar em mais de uma página ao invés de usar export const Container
// usa const Container e export default Container no fim da página
const Container = styled.div`
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

export default Container;
