import styled from 'styled-components';
import { flexCSS } from '../../styles/GlobalStyles';

export const Container = styled.div`
  position: relative;
  border-bottom: 4px solid var(--primary);
  transition: .5s;

  &:hover{
    transform: scale(1.1);
    z-index: 2;
  }
  
  .p-img{
    position: relative;
    transition: .5s;

    img{
      width: 36rem;
      height: 23rem;
    }

    &::before{
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
    }
  }
  
  .details{
    position: absolute;
    display: block;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: .5s;
      
    p{
      font-size: var(--p-font);
      word-spacing: 2px;
      margin: 1rem;
      color: #fff;
    }
  }

  &:hover .details, &:hover .p-img::before{
    display: none;
    visibility: hidden;
    animation: fade 1s;
  }
  
  .btnFlex{
    ${flexCSS}
    justify-content: center;
    gap: 1.6rem;
    margin-bottom: 1rem;
  }
`;
