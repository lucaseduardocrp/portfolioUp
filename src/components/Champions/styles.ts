import styled from "styled-components";
import { flexCSS } from "../../styles/GlobalStyles";

export const Container = styled.div`
  position: relative;
  width: 70rem;
  height: 70rem;
  background: var(--grey);
  border-radius: 50%;
  overflow: hidden;

  &::before{
    content: '';
    position: absolute;
    inset: 0 10rem;
    z-index: 1;
    background: var(--primary);
    animation: rotation 5s linear infinite;
    transition: all .30s ease;
  }

  &:hover::before{
    inset: 0;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &::after{
    content: '';
    position: absolute;
    inset: 0.3rem;
    z-index: 1;
    background: var(--white);
    border-radius: 50%;
  }

  .content{
    position: absolute;
    inset: 0.5rem;
    background: var(--white);
    border-radius: 50%;
    z-index: 2;
    overflow: hidden;
    ${flexCSS}
    justify-content: center;
    flex-direction: column;
    padding: 4rem;
    gap: 1rem;

    h3{
      font-size: var(--x-font);
      color: var(--primary);
      font-family: 'Bebas Neue', sans-serif;
    }

    p{
      font-size: var(--p-font);
      line-height: 1.4;
      text-align: center;
    }

    .techImageDescrip{
      border: 1px solid var(--primary);
      border-radius: 0.8rem;
      padding: 1rem;
      position: relative;
      display: flex;
      width: 6rem;
      height: auto;
    }
}

  >img{
    position: absolute;
    width: 95%;
    height: 90%;
    object-fit: contain;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    overflow: hidden;
    border-radius: 50%;
    background: #fff;
    transition: all .15s ease;

    &:hover{
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    width: 45rem;
    height: 45rem;
  }
`;