import styled from 'styled-components';
import { flexCSS } from '../../styles/GlobalStyles';

export const Container = styled.div`
  ${flexCSS}
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-between;
  gap: 6rem;

  .leftContent{
    h3{
      font-size: var(--h3-font);
      letter-spacing: 1px;
      font-family: 'Bebas Neue', sans-serif;
      margin: 10rem 0;
    }

    .techGrid{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
      gap: 3rem;
    }
  }
`;


