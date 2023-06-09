import styled from 'styled-components';
import { flexCSS } from '../../styles/GlobalStyles';

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  padding: 0 12% 0;
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
          font-size: var(--p-font);
          color: var(--black);
          transition: all .30s ease;
            
          &:hover{
            color: var(--primary);
          }
          }
        }
      }
      
      .burgerMenu{
        display: none;
      }
    }

@media (max-width: 1600px){
  padding: 0 6% 0;
}
    
@media (max-width: 800px) {
  padding: 0 4%;

  nav{
    .navlinks li{
      margin-left: 0;
    }
      
    .Open{
      width: 100%;
      height: 50vh;
      line-height: 3.5;
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
