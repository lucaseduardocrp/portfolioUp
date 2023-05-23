import styled from "styled-components";
import { flexCSS } from "../../styles/GlobalStyles";

const Container = styled.div`
  position: relative;
  width: 8rem;
  ${flexCSS}
  flex-direction: column;
  gap: 0.4rem;
  
  .box{
    ${flexCSS}
    flex-direction: column;
    gap: 0.4rem;
    transition: all .20s ease;
    cursor: pointer;
    
    .elipse{
      ${flexCSS}
      padding: 1rem;
      border: 2px solid var(--grey);
      border-radius: 50%;
      
      img{
        width: 3rem;
        height: 3rem;
      }

      &:hover{
      border-color: var(--primary);
      }
    }
    
    p{
      font-size: var(--p-font);
      color: var(--black);
      font-family: 'Bebas Neue', sans-serif;
    }

    &:hover{
      transform: scale(1.1);
    }
  }

  .smElipse{
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    background: var(--grey);
    margin: 1rem 0;
  } 
`;

interface Props{
  name: string;
  src: string;
}

export const Skills = ({name, src}: Props) => {
  return(
    <>
    <Container>
      <div className="box">
        <div className="elipse">
          <img src={src} />
        </div>
        <p>{name}</p>
      </div>
      <div className="smElipse" />
    </Container>
    </>
  )
}

