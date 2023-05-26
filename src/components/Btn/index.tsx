import styled from "styled-components";

const Button = styled.a`
  padding: 1.5rem 3rem;
  font-size: 1.8rem;
  background: var(--primary);
  color: var(--btnText);
  border: 2px solid transparent;
  border-radius: 3rem;
  transition: all .35s ease;

  &:hover{
    color: var(--black);
    background: transparent;
    border: 2px solid var(--primary);
  }
`;

interface BtnProps {
  text: string;
  ClassName?: string;
  href?: string;
  target?: string;
}

export function Btn({text, ClassName, href, target}: BtnProps) {
  return (
    <Button className={ClassName} href={href} target={target}>{text}</Button>
  );
}
