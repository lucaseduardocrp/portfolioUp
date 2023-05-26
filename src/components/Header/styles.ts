import styled, { css } from 'styled-components';
import { flexCSS } from '../../styles/GlobalStyles';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';


export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  padding: 0 4% 0;
  top: 0;
  left: 0;
  z-index: 1000;
  background: var(--white);

  nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 9rem;

    img{
      width: 16rem;
    }

    .navlinks{
      ${flexCSS}
      
      
      li{
        margin-left: 3rem;
        
        a{
          position: relative;
          font-size: var(--p-font);
          font-weight: 500;
          color: var(--black);
          
          &::before{
              content: attr(data-text);
              position: absolute;
              width: 0;
              overflow: hidden;
              transition: all .30s ease;
            }
            
            &:hover::before{
              width: 100%;
              color: var(--primary);
            }
          }
        }
      }
      
      .burgerMenu{
        display: none;
      }
    }
    
@media (max-width: 800px) {
  nav{
    .navlinks li{
      margin-left: 0;
    }
      
    .Open{
      width: 100%;
      height: 45vh;
      line-height: 3;
      padding: 3rem;
      flex-direction: column;
      position: absolute;
      top: 8rem;
      left: 0;
      background: var(--white);
      border-bottom: 1px solid var(--primary);
    }
    .Close{
      display: none;
    }

    .burgerMenu{
      display: block;
    }
  }
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
