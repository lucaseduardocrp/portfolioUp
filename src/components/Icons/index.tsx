import styled from "styled-components";
import { TfiMenu } from 'react-icons/tfi';
import { AiOutlineArrowUp } from 'react-icons/ai';

export const MobileMenu = styled(TfiMenu)`
  font-size: 4rem;
  color: var(--black);
`;

export const ArrowTop = styled(AiOutlineArrowUp)`
  padding: 0.6rem;
  border: 2px solid var(--primary);
  border-radius: 10px;
  font-size: 3.6rem;
  fill: var(--white);
  background: var(--primary);
  transition: all .20s ease;
  
  &:hover{
      background: var(--white);
      fill: var(--primary);
  }
`;

export function Icons() {
  return;
}