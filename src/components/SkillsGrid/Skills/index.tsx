import styled from "styled-components";
import { flexCSS } from "../../../styles/GlobalStyles";
import { useState } from "react";

const Container = styled.div`
  width: 8rem;
  ${flexCSS}
  flex-direction: column;
  gap: 0.6rem;
  transition: all .20s ease;
  cursor: pointer;
  
  p{
    font-size: var(--p-font);
    color: var(--black);
    font-family: 'Bebas Neue', sans-serif;
  }

  &:hover{
    transform: scale(1.1);
  }

  .elipse{
    ${flexCSS}
    padding: 1.4rem;
    border: 2px solid var(--grey);
    border-radius: 50%;
    
    img{
      width: 3rem;
      height: 3rem;
    }

    &:hover{
    border-color: var(--primary);
  }
  
    &:active{
    border-color: var(--primary);
    }
  }
`;

interface Props{
  name: string;
  src: string;
  alt: string;
  onClick: React.MouseEventHandler;
}

export const Skills = ({name, src, alt, onClick}: Props) => {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(active)
  }

  return(
    <>
      <Container onClick={onClick}>
        <div className={toggle ? 'elipse active' : 'elipse'}>
          <img src={src} alt={alt}/>
        </div>
        <p>{name}</p>
      </Container>
    </>
  )
}

