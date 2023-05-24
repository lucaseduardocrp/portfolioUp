import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 393px;
  background: $dark-200-color;
  padding: 35px 45px;
  border: 1px solid $dark-400-color;
  border-radius: 8px;
  transition: all .45s ease;
  
  h3{
      font-size: 3rem;
      font-weight: 600;
      margin-bottom: 15px;
  }

  p{
      font-size: var(--p-font);
      line-height: 1.8;
      margin-bottom: 25px;
  }
  
  &:hover{
      transform: translateY(-8px);
      cursor: pointer;
      box-shadow: 1px 1px 8px $primary-color;
  }
`;

interface Props{
  icon: ReactNode;
  title: string;
  description: string;
}

export const ServiceCard = ({icon, title, description}: Props) => {
  return(
    <Container>
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </Container>
  )
}