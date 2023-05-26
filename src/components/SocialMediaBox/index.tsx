import { ReactNode } from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { styled } from "styled-components";
import { flexCSS } from "../../styles/GlobalStyles";

export const WhatsappIcon = styled(BsWhatsapp)``;

export const InstagramIcon = styled(BsInstagram)``;

export const LinkedinIcon = styled(BsLinkedin)``;

export const GithubIcon = styled(BsGithub)``;

const Box = styled.a`
  ${flexCSS}
  background-color: var(--white);
  padding: 1.6rem;
  border: 2px solid var(--grey);
  border-radius: 12px;
  margin: 4.5rem 0 0 0;
  font-size: 3.2rem;
  color: var(--primary);
  transition: all .30s ease;

  &:hover{
    border-color: var(--primary);
    color: var(--primary);
  }

  @media (max-width: 800px){
    padding: 1rem;
    font-size: 2.4rem;
  }
`;

interface Props{
  href?: string;
  children?: ReactNode;
}

export function SocialMediaBox({href, children}: Props) {
  return (
    <Box href={href} target="_blank" rel="noreferrer">{children}</Box>
  );
}
