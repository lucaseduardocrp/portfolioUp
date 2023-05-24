import styled from 'styled-components';
import { flexCSS } from '../../styles/GlobalStyles';

export const Container = styled.div`
  ${flexCSS}
  align-items: start;
  justify-content: space-between;
  gap: 2rem;

  .leftContent{
    h3{
      font-size: var(--h3-font);
      letter-spacing: 1px;
      font-family: 'Bebas Neue', sans-serif;
      margin: 8rem 0 13rem 0;
    }

    .techGrid{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
      gap: 2rem;
    }
  }

  @media (max-width: 1240px) {
    .leftContent{
      h3{
        margin: 5rem 0;
      }
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;


