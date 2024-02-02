import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-6);
  margin: 0 var(--space-4);
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius-1);
  color: var(--color-primary);
  font-weight: 500;
  a {
    display: flex;
    align-items: center;
    color: var(--color-primary);
    font-size: var(--font-size-3);
  }
`;
