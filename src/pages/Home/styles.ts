import styled from 'styled-components';
import { flexCSS } from '../../styles/GlobalStyles';

export const Main = styled.main`
  .home{
    display: grid;
    grid-template-columns: 3fr 1fr;
    
    .homeImage{
      text-align: end;

      img{
        width: 50rem;
        object-fit: cover;
      }
    }

    .homeContainer{
      margin-top: 8rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  @media (max-width: 1024px) {
    .home{
      display: block;
      img{
        display: none;
      }

      .homeContainer{
        margin-top: 0;
      }
    }

  }
`;

export const HomeText = styled.div`
  h1{
    font-size: var(--h1-font);
    line-height: 1.2;
    font-family: 'Bebas Neue', sans-serif;

    span{
      font-family: 'Bebas Neue', sans-serif;
    }
  }

  .typewriter{
    font-size: var(--p-font);
    line-height: 1.6;
    color: var(--black);
    margin: 3rem 0px 0;

    &::after {
        content: "|";
        margin-left: 8px;
        opacity: 1;
        animation: blink 1s infinite;
        color: var(--primary);
    }
  }

  @keyframes blink {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
    }

  p:nth-child(3){
      font-size: 1.8rem;
      margin: 2rem 0 4rem 0;
  }
`;

//About Section
export const AboutSection = styled.section`
  .about-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    background: var(--white);
    border: 2px solid var(--primary);

    .about-img{
      text-align: center;
      margin-top: 2rem;

      img{
        height: 50rem;
        object-fit: cover;
        margin-right: 2rem;
      }
    }   

  .about-text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 3rem 1rem;

    h2, h3{
      letter-spacing: 1px;
      margin: 10px 0;
    }

    h2{
      font-size: var(--h2-font);
      font-weight: 700;
    }

    h3{
      font-size: var(--h3-font);

      span{
        font-family: 'Bebas Neue', sans-serif;
      }
    }

    h4{
      font-size: var(--h4-font);
    }

    p{
        font-size: var(--p-font);
        line-height: 1.6;
        margin-top: 20px;
    }
  }

    .socialMedia{
        ${flexCSS}
        gap: 1rem;
      }
    }
`;


export const SkillsSection = styled.section`
  height: 100vh;
  padding: 6rem 4%;
  
  h2{
    text-align: center;
    font-size: var(--xl-font);
    color: var(--primary);
    letter-spacing: 1px;
    font-family: 'Bebas Neue', sans-serif;
  }
`;
