import styled from "styled-components";

const Container = styled.div`
  max-width: 34rem;
  height: 34rem;
  background: var(--white);
  padding: 3.2rem;
  border: 1px solid var(--grey);
  border-radius: 8px;
  transition: all .45s ease;
  
  h3{
    font-size: 3rem;
    margin: 1rem 0;
  }

  p{
    font-size: var(--p-font);
    line-height: 1.6;
  }
  
  &:hover{
    transform: translateY(-1rem);
    box-shadow: 0px 0px 2rem var(--primary);
    border-color: var(--primary);
  }
`;

interface Props{
  alt: string;
  src: string;
  title: string;
  description: string;
}

export const ServiceCard = ({src, alt, title, description}: Props) => {
  return(
    <Container data-aos="flip-left" data-aos-duration="1000">
      <img src={src} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </Container>
  )
}