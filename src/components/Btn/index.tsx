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

export function Btn(props: {text: string}) {
  return (
    <Button href='https://api.whatsapp.com/send/?phone=5521985970787&text&type=phone_number&app_absent=0' target="_blank">{props.text}</Button>
  );
}
