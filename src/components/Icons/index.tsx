import styled, { css } from "styled-components";

import { TfiMenu } from 'react-icons/tfi';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

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

const darkModeIcons = css`
  border-radius: 10px;
  font-size: 2.6rem;
  fill: var(--primary);
  transition: all .30s ease;
  cursor: pointer;
  
  &:hover{
    transform: scale(1.2);
  }
`;

export const DarkIcon = styled(BsMoonFill)`
  ${darkModeIcons}
`;

export const LightIcon = styled(BsSunFill)`
  ${darkModeIcons}
`;

export function Icons() {
  return;
}