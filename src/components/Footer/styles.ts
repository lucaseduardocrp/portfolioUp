import styled from 'styled-components';
import { flexCSS } from '../../styles/GlobalStyles';

export const FooterContainer = styled.footer`
    ${flexCSS}
    justify-content: space-around
    ;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 2rem 4%;
    background: var(--white);

    color: var(--black);
    font-size: 1.4rem;
`;
