import { createGlobalStyle, css } from "styled-components";

export const flexCSS = css`
  display: flex;
  align-items: center;
`;


export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Archivo', sans-serif;
    //font-family: 'Bebas Neue', sans-serif;
  }

  html{
    min-height: 100%;
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body{
    color: var(--black);
    background: var(--white);
    padding-top: 4rem;
  }

  section{
    width: 100%;
    height: auto;
    padding: 14rem 12% 14rem;
  }

  span{
    color: var(--primary);
  }

  :root{
    ${props => {
      const theme = props.theme;

      let append = '';
      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      });

      return append;
    }}

    --xl-font: 8rem;
    --x-font: 6rem;
    --h1-font: 5rem;
    --h2-font: 4rem;
    --h3-font: 2rem;
    --h4-font: 2rem;
    --p-font: 2rem;
    --sm-font: 1.5rem;
    --xsm-font: 1.4rem;
  }

  /*------SCROLLBAR DESIGN------*/

  ::-webkit-scrollbar{
      width: 5px;
  }
  ::-webkit-scrollbar-thumb{
      background: var(--primary);
      border-radius: 30px;
  }
  ::-webkit-scrollbar-track{
      background: transparent;
  }

  /*------TEXT SELECTION DESIGN------*/

  ::selection {
      background-color: var(--primary);
      color: var(--black);
  }

  @media (max-width: 1600px){
    section{
      padding: 12rem 6% 12rem;
    }
  }

  @media (max-width: 1240px){
    :root{
      --x-font: 4rem;
      --h1-font: 4rem;
      --h2-font: 3.2rem;
      --h3-font: 1.6rem;
      --h4-font: 1.6rem;
      --p-font: 1.6rem;
    }
  }

  @media (max-width: 800px){
    :root{
      --sm-font: 1.4rem;
    }
    section{
      padding: 8rem 4% 14rem;
    }
  }
`;