import styled from 'styled-components';
import { flexCSS } from '../../styles/GlobalStyles';
import { ArrowTop } from '../Icons';

export const FooterContainer = styled.footer`
    ${flexCSS}
    justify-content: space-around
    ;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 2rem 4%;
    background: var(--alternativeBG);

    color: var(--black);
    font-size: 1.4rem;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <p>Copyright © 2023 by Lucas Eduardo Crespo de Carvalho All Rights Reserved</p>

      <a href="#home"><ArrowTop /></a>
    </FooterContainer>
  )
}

