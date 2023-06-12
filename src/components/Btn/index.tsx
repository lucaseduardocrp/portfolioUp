import styled from "styled-components";

type Props = {
  text: string,
  href: string
}

const Button = styled.a`
  padding: 1.5rem 3rem;
  font-size: 1.8rem;
  background: var(--primary);
  color: var(--btnText);
  border: 2px solid transparent;
  border-radius: 1rem;
  transition: all .35s ease;

  &:hover{
    color: var(--black);
    background: transparent;
    border: 2px solid var(--primary);
  }
`;

export function Btn({href, text}: Props) {
  return (
    <Button href={href} target="_blank">{text}</Button>
  );
}
