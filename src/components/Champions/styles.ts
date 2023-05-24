import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 60rem;
  height: 60rem;
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

  img{
    position: absolute;
    top: -1rem;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: 10;
  }

  @media (max-width: 768px) {
    width: 45rem;
    height: 45rem;
  }
`;