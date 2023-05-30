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

  @media (max-width: 1240px) {
    .home .homeImage img{
      width: 40rem;
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

/*------------ About Section ------------*/

export const AboutSection = styled.section`
  .about-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    background: var(--alternativeBG);
    border: 2px solid var(--border);

    .about-img{
      text-align: center;
      margin-top: 2rem;

      img{
        height: 58rem;
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
      letter-spacing: 2px;

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
        gap: 2.5rem;
      }
    }

    @media (max-width: 800px){
      .about-container .about-text{
        align-items: center;
      }
    }
`;

/*------------ Skills Section ------------*/

export const SkillsSection = styled.section`
  position: relative;

  h2{
    text-align: center;
    font-size: var(--xl-font);
    color: var(--primary);
    letter-spacing: 1px;
    font-family: 'Bebas Neue', sans-serif;
  }
`;

/*------------ Services Section ------------*/

export const ServiceSection = styled.section`
  background: var(--alternativeBG);
  text-align: center;
        
  h4{
  font-size: var(--h4-font);
  margin-bottom: 1.5rem;
  margin-top: 2rem;
  }
  
  h2{
  margin-top: 1.5rem;
  font-size: var(--xl-font);
  letter-spacing: 1px;
  line-height: 1;
  font-family: 'Bebas Neue', sans-serif;

  >span{
    font-family: 'Bebas Neue', sans-serif;
    }
  }

  .serviceGrid{
    ${flexCSS}
    justify-content: center;
    flex-wrap: wrap;
    gap: 8rem;
    margin-top: 8rem;
  }
`;

/*------------ Projects Section ------------*/

export const ProjectSection = styled.section`
  text-align: center;
  
  h2{
    color: var(--primary);
    font-size: var(--xl-font);
    letter-spacing: 1px;
    margin-bottom: 8rem;
    font-family: 'Bebas Neue', sans-serif;
  }
  
  .projectGrid{
    ${flexCSS}
    flex-wrap: wrap;
    justify-content: center;
    gap: 6rem;
  }
  
  .languages{
    width: 2rem;
    height: 2rem;
    margin-left: 0.6rem;
  }
  `;

/*------------ Contact Section ------------*/

export const ContactSection = styled.section`
  
`;
