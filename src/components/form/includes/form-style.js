import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  padding: var(--space-4) var(--space-4);
  border-radius: var(--border-radius-2);
  font-size: 1.15rem;
  font-weight: bold;
  cursor: pointer;
`;

export const BigButton = styled(Button)`
  border-radius: 0;
`;
