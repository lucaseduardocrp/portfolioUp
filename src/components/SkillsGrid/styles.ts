import styled from 'styled-components';
import { flexCSS } from '../../styles/GlobalStyles';

export const Container = styled.div`
  ${flexCSS}
  align-items: start;
  justify-content: space-between;
  gap: 2rem;

  .leftContent{
    overflow-x: hidden;

    h3{
      font-size: var(--h3-font);
      letter-spacing: 1px;
      font-family: 'Bebas Neue', sans-serif;
      margin: 10rem 0 10rem 0;
    }

    .techGrid{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
      gap: 2rem;
      place-items: center;
    }

    .carousel{
      display: none;
    }
  }

  @media (max-width: 1240px) {
    .leftContent{
      h3{
        margin: 4rem 0;
      }
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 6rem;

    .leftContent{
      text-align: center;

      .techGrid{
        display: none;
      }

      .carousel{
        display: block;
        ${flexCSS}
        justify-content: center;
        flex-direction: column;
        text-align: center;
      }
    }
  }
`;


