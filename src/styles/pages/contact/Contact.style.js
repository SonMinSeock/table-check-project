import styled from "styled-components";

export const Main = styled.main`
  padding: var(--space-4);
  & a {
    display: block;
    width: 100%;
    color: #3b1e1e;
    background-color: #f9e000;
    font-weight: bold;
    border: none;
    padding: var(--space-3);
    border-radius: var(--border-radius-2);
    font-size: 1.1rem;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: var(--font-size-6);
  margin: var(--space-3) 0;
`;

export const Paragraph = styled.p`
  font-size: var(--font-size-3);
  margin: var(--space-8) 0;
`;
