import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--space-4);
`;

export const H1 = styled.h1`
  font-size: var(--font-size-7);
  font-family: "Nanum Brush Script", cursive;
`;

export const Form = styled.form`
  width: 70%;
  margin: var(--space-4) auto;
  & section {
    display: flex;
    flex-direction: column;
  }
  background-color: #eeeff1;
  padding: 1.5rem;
  border-radius: var(--border-radius-1);
`;

export const Input = styled.input`
  padding: var(--space-2);
  border: none;
  border-radius: var(--border-radius-2);
  margin-bottom: 0.5rem;
  color: black;
  background-color: white;
`;

export const Button = styled.button`
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  padding: var(--space-2);
  border-radius: var(--border-radius-2);
  cursor: pointer;
  margin-top: 0.5rem;
`;
