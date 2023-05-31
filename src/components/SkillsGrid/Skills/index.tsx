import styled from "styled-components";
import { flexCSS } from "../../../styles/GlobalStyles";

interface Props{
  name?: string,
  src?: string,
  alt?: string,
  onClick?: React.MouseEventHandler;
}

const Container = styled.div`
  width: 8rem;
  ${flexCSS}
  flex-direction: column;
  gap: 1rem;
  transition: all .20s ease;
  cursor: pointer;
  
  p{
    font-size: var(--p-font);
    color: var(--skillText);
    font-family: 'Bebas Neue', sans-serif;
  }
  
  &:hover{
    transform: scale(1.1);
  }
`;


const Elipse = styled.div<Props>`
  ${flexCSS}
  padding: 1.4rem;
  border-radius: 50%;
  border: 2px solid var(--grey);

  img{
    width: 5rem;
    height: 5rem;
  }

  &:hover{
  border-color: var(--primary);
} 

@media (max-width: 1440px){
  img{
    width: 3rem;
    height: 3rem;
  }
}
`;

export const Skills = ({name, src, alt, onClick}: Props) => {
  return (
    <Container onClick={onClick} data-aos="flip-left" data-aos-duration='700'>
      <Elipse>
        <img src={src} alt={alt} />
      </Elipse>
      <p>{name}</p>
    </Container>
  );
}

