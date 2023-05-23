import styled from 'styled-components';
import { flexCSS } from '../../styles/GlobalStyles';

export const Container = styled.div`
  ${flexCSS}
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-between;

  .leftContent{
    h3{
      font-size: var(--h3-font);
      letter-spacing: 1px;
      font-family: 'Bebas Neue', sans-serif;
      margin: 10rem 0;
    }

    .techGrid{
      position: relative;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 2rem 0;
    }
  }

  .elipseAnimated{
    width: 70rem;
    border: 2px solid var(--primary);
    border-radius: 50%;
    background: var(--white);
    text-align: center;

    img{
      width: 30rem;
      object-fit: contain;
    }
  }
`;

export const Line = styled.hr`
  bottom: 1.6rem;
  left: 0;
  z-index: -100;
  position: absolute;
  background-color: red;
  height: 2px;
  width: 100%;
`;

